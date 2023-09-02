import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { KEY } from "../../localKey";
import YouTube from 'react-youtube';

const API_KEY = KEY; 
const API_URL = 'https://www.googleapis.com/youtube/v3/';

function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null)
  
    const handleSearch = () => {
      if (searchTerm.trim() === '') {
        alert('Please enter a search term');
        return;
      }
  

      axios.get(`${API_URL}search`, {
        params: {
          key: API_KEY,
          part: 'snippet',
          q: searchTerm,
          maxResults: 5, 
        },
      })
      .then(response => {
        const firstVideo = response.data.items[0];
        setVideos(response.data.items);
        setSelectedVideo(firstVideo.id.videoId)
      })
      .catch(error => {
        console.error(error);
      });
    };
  
    return (
        <div>
          <h1>YouTube Video Search</h1>
          <div>
            <input
              type="text"
              placeholder="Search for videos"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="video-container">
            {selectedVideo && (
              <YouTube videoId={selectedVideo} />
            )}
          </div>
          <ul>
            {videos.map((video) => (
              <li key={video.id.videoId}>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedVideo(video.id.videoId)}
                >
                  {video.snippet.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );      
  }

export default SearchPage;