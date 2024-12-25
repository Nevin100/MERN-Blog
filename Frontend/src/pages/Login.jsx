import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import "../App.css";
import { UserContext } from "../UserContext.jsx";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  //Context Information :
  const { setUserInfo } = useContext(UserContext);

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.status !== 200) {
      alert("Login failed");
    } else {
      alert("User Login is Successful");
    }
    if (response.ok) {
      response.json().then((userInfo) => {
        setRedirect(true);
      });
    } else {
      alert("Wrong Credentials");
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <form className="login" onSubmit={login}>
        <h2 className="login-title">Login</h2>
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="logbutton">Login</button>
      </form>
    </div>
  );
};

export default Login;
