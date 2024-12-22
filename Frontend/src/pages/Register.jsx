import React, { useState } from "react";
import "../App.css";
import "../index.css";
import { Navigate } from "react-router-dom";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-type": "application/json" },
    });
    if (response.status !== 200) {
      alert("Registeration failed");
    } else {
      alert("User Registeration is Successful");
    }

    if (response.ok) {
      setRedirect(true);
    } else {
      alert("Wrong Credentials");
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <form className="register" onSubmit={register}>
        <h2 className="login-title">Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="logbutton">Register</button>
      </form>
    </div>
  );
};

export default Register;
