import React from "react";
import "../App.css";

const Post = ({ title, summary, content, cover }) => {
  return (
    <div>
      <div className="post">
        <div className="image">
          <img src={cover} alt="Image" />
        </div>
        <div className="text">
          <h2>{title}</h2>
          <div className="info">
            <span className="author">Nevin Bali</span>
            <span className="time">2024-12-18 18:57:24</span>
          </div>
          <p>{summary}</p>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
