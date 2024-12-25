import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../UserContext.jsx";

const Header = () => {
  const { setuserInfo, userInfo } = useContext(UserContext);
  //useEffect hook to fecth details of profile
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setuserInfo(userInfo);
      });
    });
  }, []);

  const LogOut = () => {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setuserInfo(null);
  };

  const username = userInfo?.username;
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
              <a style={{ cursor: "pointer" }} onClick={LogOut}>
                LogOut
              </a>
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
