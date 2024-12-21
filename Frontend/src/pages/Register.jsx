import React from "react";
import "../App.css";

const Register = () => {
  return (
    <div>
      <form className="register">
        <h2 className="login-title">Register</h2>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button className="">Register</button>
      </form>
    </div>
  );
};

export default Register;
