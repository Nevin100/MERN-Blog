import React from "react";
import "../App.css";
const Login = () => {
  return (
    <div>
      <form className="register">
        <input placeholder="Enter Username" type="text" />
        <input placeholder="Password" type="password" />
        <button className="">Login</button>
      </form>
    </div>
  );
};

export default Login;
