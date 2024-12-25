import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  return (
    <form>
      <h2 className="New-post-title">New Blog Post</h2>
      <input type="title" placeholder="Enter Title" />
      <input type="summary" placeholder="Enter Summary" />
      <input type="file" />
      <ReactQuill className="react-quill-editor" />
      <button className="post-blog-button">Post Blog</button>
    </form>
  );
};

export default CreatePost;
