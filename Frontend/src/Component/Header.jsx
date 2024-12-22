import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    });
  }, []);
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
