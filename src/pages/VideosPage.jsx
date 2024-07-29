import React, { useState } from "react";
import "./Videos.css";
import PregnancyLoss from "../assets/pregnancy-loss.png";
import IVF from "../assets/IVF.png";
import Exhibition from "../assets/Mask group.png";
import YoutubeProfileImage from "../assets/youtube-profile-image.jpg";

const VideosPage = () => {
  const [currentVideo, setCurrentVideo] = useState({
    src: "https://www.youtube.com/embed/uEXSBuhJ1AA?si=thCqm7RBzg6vlleI",
    title: "Default Video",
  });

  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/uEXSBuhJ1AA?si=thCqm7RBzg6vlleI",
      title: "Experiment",
      description: "Short Description.",
      thumbnail: Exhibition,
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/pnJrO3WssIg?si=vRJ1jbg9eXoGvF8V",
      title: "Recurrent Pregnancy Loss",
      description: "Short description of video 1.",
      thumbnail: PregnancyLoss,
    },
    {
      id: 3,
      src: "https://youtube.com/embed/duwQNtb-7rw?si=SKld_sSO0AT36jbL",
      title: "Home Service",
      description: "Bahut Dino se Office nahi aa rahe.",
      thumbnail: IVF,
    },
  ];

  const handleVideoClick = (video) => {
    setCurrentVideo({
      src: video.src,
      title: video.title,
    });
  };

  return (
    <section>
      <div>
        <h2 className="text-center">Our Videos & Real Stories</h2>
      </div>
      <div className="container">
        <div className="left-section">
          <div className="video corner-wrapper">
            <iframe
              width="720"
              height="315"
              src={currentVideo.src}
              title={`YouTube video player - ${currentVideo.title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="youtube-channel-info">
            <img
              src={YoutubeProfileImage}
              alt="Profile"
              className="youtube-profile-photo"
            />
            <div className="youtube-channel-details">
              <p className="youtube-channel-name">Ragini Nursing Bureau</p>
            </div>
          </div>
        </div>
        <div className="right-section">
          {videos.map((video) => (
            <div
              className="thumbnail"
              key={video.id}
              onClick={() => handleVideoClick(video)}
            >
              <img
                className="thumbnail-image"
                src={video.thumbnail}
                alt={`Thumbnail for ${video.title}`}
              />
              <div className="thumbnail-description">
                <h4>{video.title}</h4>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosPage;
