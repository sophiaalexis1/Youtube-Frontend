import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { KEY } from '../../localKey';

const API_KEY = KEY;
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
      const description = truncateDescription(snippet.description, 10); 
      setVideoDetails({
        title: snippet.title,
        description: description,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const truncateDescription = (text, limit) => {
    const words = text.split(' ');
    if (words.length <= limit) {
      return text;
    }
    return words.slice(0, limit).join(' ') + '...';
  };

  return (
    <div className="video-container">
      <iframe
        width="1120"
        height="630"
        src={embedUrl}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{videoDetails.title}</h2>
      <p>{videoDetails.description}</p>
    </div>
  );
};

export default VideoPlayer;
