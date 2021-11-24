import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Daniel Ruiz Gutierrez</h1>
      <p>Web Developer | Mechanical Engineer | Failure Mode Analyst | Entrepeneur</p>
    </div>
  );
};

export default Cover;
