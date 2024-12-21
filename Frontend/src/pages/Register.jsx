import React from "react";
import "../App.css";

const Register = () => {
  return (
    <div>
      <form className="register">
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button className="">Register</button>
      </form>
    </div>
  );
};

export default Register;
