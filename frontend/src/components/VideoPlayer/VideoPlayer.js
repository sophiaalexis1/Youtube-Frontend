import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {KEY} from '../../localKey'

const API_KEY = KEY
const VideoPlayer = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const [videoDetails, setVideoDetails] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchVideoDetails(videoId);
  }, [videoId]);

  const fetchVideoDetails = async (videoId) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
        params: {
          key: API_KEY,
          part: 'snippet',
          id: videoId,
        },
      });

      const snippet = response.data.items[0].snippet;
      setVideoDetails({
        title: snippet.title,
      });
    } catch (error) {
      console.error(error);
    }
  };

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
      <h3>{videoDetails.title}</h3>
      <p>{videoDetails.description}</p>
    </div>
  );
};

export default VideoPlayer;
