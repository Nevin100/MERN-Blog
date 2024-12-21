import React from "react";
import "../App.css";

const Post = () => {
  return (
    <div>
      <div className="post">
        <div className="image">
          <img
            src="https://www.science.org/do/10.1126/science.zi5bth9/files/_01_io-cover_cience.2024.384.issue-6696.largecover.jpg"
            alt="Image"
          />
        </div>
        <div className="text">
          <h2>Photojournalism at its best</h2>
          <div className="info">
            <span className="author">Nevin Bali</span>
            <span className="time">2024-12-18 18:57:24</span>
          </div>
          <p>
            This month, the National Press Photographers Association (NPPA)
            revealed their Best of Photojournalism awards. It was our first time
            entering this prestigious competition, and we won first and third
            place in the picture editing magazine cover category. While the
            Science Visuals photo team assigns original photography for some of
            our covers, a large portion of the photographs we highlight are the
            result of the team’s finely honed research skills. They find photos
            of the right thing, in the right place, at the right time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
