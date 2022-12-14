import React from "react";
import logo from "../../logo.svg";
export default function OneVideo(props) {
  return (
    <div className="one-video-wrapper col-sm-12 col-md-6">
      <div className="actual-1Vid">
        <a
          href={`https://www.youtube.com/watch?v=${props.VidId}`}
          target="_blank"
        >
          <div className="tumbnail-wrapper">
            <img src={props.VidTumbnail} alt="video here"></img>
          </div>
          <div className="videoTitle-wrapper">
            <h4>{props.VidTitle}</h4>
          </div>
          <div className="VideoDescription-wrapper">
            <p>{props.VidDescription}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
