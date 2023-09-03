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
      const description = truncateDescription(snippet.description, 10); // Limit to 25 words
      setVideoDetails({
        title: snippet.title,
        description: description,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Function to truncate description to a specified number of words
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
