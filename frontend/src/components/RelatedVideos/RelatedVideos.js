import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { KEY } from '../../localKey.js'

const API_KEY = KEY
const API_URL = 'https://www.googleapis.com/youtube/v3/';

function RelatedVideos({ videoId }) {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    fetchRelatedVideos(videoId);
  }, [videoId]);

  const fetchRelatedVideos = async (videoId) => {
    try {
      const response = await axios.get(`${API_URL}search`, {
        params: {
          type: 'video',
          relatedToVideoId: videoId,
          key: API_KEY,
          part: 'snippet',
          maxResults: 5,
        },
      });

      setRelatedVideos(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Related Videos</h2>
      <div className="related-videos-container">
        {relatedVideos.map((video) => (
          <div key={video.id.videoId} className="related-video">
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <p>{video.snippet.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedVideos;
