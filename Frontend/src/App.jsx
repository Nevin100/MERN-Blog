import React from "react";
import Post from "./Component/Post.jsx";
import Header from "./Component/Header.jsx";
import { Route, Routes } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <main>
            <Header />
            <Post />
            <Post />
            <Post />
          </main>
        }
      />
    </Routes>
  );
};

export default App;
