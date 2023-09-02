import React from 'react';

const VideoPlayer = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
