import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  return (
    <form>
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
      <input type="file" />
      <ReactQuill
        className="react-quill-editor"
        value={content}
        onChange={(newVal) => setContent(newVal)}
      />
      <button className="post-blog-button">Post Blog</button>
    </form>
  );
};

export default CreatePost;
