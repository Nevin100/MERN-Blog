import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header>
        <Link to="/" className="Logo">
          Blog
        </Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
