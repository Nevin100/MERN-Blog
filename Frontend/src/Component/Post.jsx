import React from "react";
import "../App.css";
import { formatISO9075 } from "date-fns"; // For date formatting

const Post = ({ title, summary, content, cover, createdAt }) => {
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
            <span className="time">{formatISO9075(new Date(createdAt))}</span>
          </div>
          <p>{summary}</p>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
