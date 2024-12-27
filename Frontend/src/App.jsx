import React from "react";
import Post from "./Component/Post.jsx";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { UserContextProvider } from "./UserContext.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import PostPage from "./pages/PostPage.jsx";
const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
