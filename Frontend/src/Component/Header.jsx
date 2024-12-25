import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const [username, setUsername] = useState(null);

  //useEffect hook to fecth details of profile
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);

  const LogOut = () => {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
  };

  return (
    <div>
      <header>
        <Link to="/" className="Logo">
          Blog
        </Link>
        <nav>
          {username && (
            <>
              <Link to="/create">Create New Post</Link>
              <a onClick={LogOut}>LogOut</a>
            </>
          )}
          {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
