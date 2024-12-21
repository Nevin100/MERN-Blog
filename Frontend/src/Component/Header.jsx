import React from "react";
import "../App.css";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header>
        <a href="#" className="Logo">
          Blogs
        </a>
        <nav>
          <Link to="/login">
            <Login />
          </Link>
          <Link to="/register">
            <Register />
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
