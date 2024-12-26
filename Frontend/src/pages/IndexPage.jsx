import React, { useEffect } from "react";
import Post from "../Component/Post";

//2:19:00 start
const IndexPage = () => {
  useEffect(() => {
    const response = fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        console.log(posts);
      });
    });
  });

  return (
    <>
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default IndexPage;
