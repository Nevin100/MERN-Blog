import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);
  if (!postInfo) {
    return " ";
  }

  return (
    <div className="single-post-page">
      <div className="image-single-post">
        <img
          src={`http://localhost:4000/${postInfo.cover}`}
          alt="cover photo"
        />
      </div>
      <h1 className="post-page-title">{postInfo.title}</h1>
      <h3 className="post-page-summary">{postInfo.summary}</h3>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
};

export default PostPage;
