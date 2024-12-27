import React from "react";
import "../App.css";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, content, cover, createdAt, author }) => {
  return (
    <div>
      <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={"http://localhost:4000/" + cover} alt="Image" />
          </Link>
        </div>
        <div className="text">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <div className="info">
            <span className="author">{author?.username || "Unknown"}</span>
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
