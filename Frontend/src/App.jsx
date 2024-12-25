import React from "react";
import Post from "./Component/Post.jsx";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { UserContextProvider } from "./UserContext.jsx";
import CreatePost from "./pages/CreatePost.jsx";

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
