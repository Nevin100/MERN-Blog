import React, { useState } from "react";
import Editor from "../Component/Editor.jsx";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  const createNewPost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    console.log("FormData content:", content);
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={createNewPost}>
      <h2 className="New-post-title">New Blog Post</h2>
      <input
        type="title"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="summary"
        placeholder="Enter Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input type="file" onChange={(e) => setFiles(e.target.files)} />
      <Editor
        className="react-quill-editor"
        value={content}
        onChange={setContent}
      />
      <button className="post-blog-button">Post Blog</button>
    </form>
  );
};

export default CreatePost;
