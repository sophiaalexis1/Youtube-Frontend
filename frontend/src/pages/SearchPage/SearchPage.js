import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { KEY } from "../../localKey";
import SearchBar from '../../components/SearchBar/SearchBar';
import { Link, useParams } from "react-router-dom";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import useAuth from "../../hooks/useAuth";

const API_KEY = KEY;
const API_URL = 'https://www.googleapis.com/youtube/v3/';

function SearchPage() {
  const [user] = useAuth();
  const { searchTerm } = useParams(); // Retrieve the search term from the URL
  const isLoggedIn = user != null && user != undefined;
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);


  useEffect(() => {
    const apiUrl = `http://127.0.0.1:8000/video/results/:searchTerm/`;
    axios.get(`${API_URL}search`, {
      params: {
        key: API_KEY,
        part: 'snippet',
        q: searchTerm, // Use the retrieved search term
        maxResults: 6,
      },
    }).then(response => {
      // Handle the API response here
      setVideos(response.data.items);
  
    }).catch(error => {
      console.error(error);
    });
  }, [searchTerm]); // Add searchTerm to the dependencies array to trigger the effect when it changes

  return (
    <div className="container">
      {isLoggedIn ? (
        <h1>Welcome back {user.username}!</h1>
      ) : (
        <h1>Welcome!</h1>
      )}
      <br />
      <br />
      <SearchBar />
      <br />
      <br />
      <div className="video-grid">
        {videos.map((video) => (
        <Link to={"/video/" + video.id.videoId}>
        <VideoPlayer videoId={video.id.videoId}/>
      </Link>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
}

export default SearchPage;
