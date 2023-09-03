import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";


const HomePage = () => {
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  const selectedVideoId = 'hZytp1sIZAw';
  const isLoggedIn = user != null && user != undefined

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
        <Link to="/video/ModbgkYi9Fg">
          <VideoPlayer videoId="ModbgkYi9Fg" />
        </Link>
        <Link to="/video/hZytp1sIZAw">
          <VideoPlayer videoId="hZytp1sIZAw" />
        </Link>
        <Link to="/video/qP1Fw2EpwqE">
          <VideoPlayer videoId="qP1Fw2EpwqE" />
        </Link>
        <Link to="/video/JuhBs44odO0">
          <VideoPlayer videoId="JuhBs44odO0" />
        </Link>
        <Link to="/video/PawTU9Dip2Q">
          <VideoPlayer videoId="PawTU9Dip2Q" />
        </Link>
        <Link to="/video/78lDIA-Rhbw">
          <VideoPlayer videoId="78lDIA-Rhbw" />
        </Link>
      </div>
      <br />
      <br />

    </div>
  );
};

export default HomePage;
