import React, { useState } from "react";
import "./body.css";
import image from "../../images/image.jpg";
import video1 from "../../lesson videos/videoshaker1.mp4";
import video2 from "../../lesson videos/videioshaker2.mp4";
import video3 from "../../lesson videos/videoshakerulti.mp4";
import video4 from "../../lesson videos/videiotiny2.mp4";
import poster1 from "../../images/poster1.jpg";
import { getVideos } from "../../Helper/GetVideos";
import {
  MdCastForEducation,
  MdQueueMusic,
  MdOutlineSportsEsports,
  MdOutlineSportsSoccer,
} from "react-icons/md";

function Body() {
  const [over, setOver] = useState(true);

  return (
    <div className="body-main">
      <div className="container">
        <div className="lesson-name">
          <MdCastForEducation className="body-icon" />
          <h2>Education</h2>
        </div>
        <div className="video">
          {getVideos.map((video) => {
            return (
              <video
                poster={over ? poster1 : null}
                onMouseOver={(event) => {
                  event.target.play();
                }}
                onMouseOut={(event) => {
                  event.target.pause();
                  over(true);
                }}
                src={video.path}
              ></video>
            );
          })}
          <video src={video2}></video>
          <video poster={poster1} src={video3}></video>
          <video poster={poster1} src={video4}></video>
        </div>
        <div className="lesson-name">
          <MdQueueMusic className="body-icon" />
          <h2>Music</h2>
        </div>
        <div className="video">
          {getVideos.map((video) => {
            return (
              <video
                poster={over ? poster1 : null}
                onMouseOver={(event) => {
                  event.target.play();
                }}
                onMouseOut={(event) => {
                  event.target.pause();
                  over(true);
                }}
                src={video.path}
              ></video>
            );
          })}
          <video src={video2}></video>
          <video poster={poster1} src={video3}></video>
          <video poster={poster1} src={video4}></video>
        </div>
        <div className="lesson-name">
          <MdOutlineSportsEsports className="body-icon" />
          <h2>Esport</h2>
        </div>
        <div className="video">
          {getVideos.map((video) => {
            return (
              <video
                poster={over ? poster1 : null}
                onMouseOver={(event) => {
                  event.target.play();
                }}
                onMouseOut={(event) => {
                  event.target.pause();
                  over(true);
                }}
                src={video.path}
              ></video>
            );
          })}
          <video src={video2}></video>
          <video poster={poster1} src={video3}></video>
          <video poster={poster1} src={video4}></video>
        </div>
        <div className="lesson-name">
          <MdOutlineSportsSoccer className="body-icon" />
          <h2>Sport</h2>
        </div>
        <div className="video">
          {getVideos.map((video) => {
            return (
              <video
                poster={over ? poster1 : null}
                onMouseOver={(event) => {
                  event.target.play();
                }}
                onMouseOut={(event) => {
                  event.target.pause();
                  over(true);
                }}
                src={video.path}
              ></video>
            );
          })}
          <video src={video2}></video>
          <video poster={poster1} src={video3}></video>
          <video poster={poster1} src={video4}></video>
        </div>
      </div>
    </div>
  );
}

export default Body;
