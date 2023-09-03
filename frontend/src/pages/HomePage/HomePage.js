import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import axios from "axios";
import SearchPage from "../../components/SearchPage/SearchPage";
import "./HomePage.css"
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos.js"

const HomePage = () => {
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const selectedVideoId = 'hZytp1sIZAw';

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);

  return (
    <div className="container">
      <h1>Welcome {user.username}!</h1>
      <SearchPage />
      <div className="video-grid">
        <VideoPlayer videoId="ModbgkYi9Fg" />
        <VideoPlayer videoId="hZytp1sIZAw" />
        <VideoPlayer videoId="qP1Fw2EpwqE" />
        <VideoPlayer videoId="JuhBs44odO0" />
        <VideoPlayer videoId="PawTU9Dip2Q" />
        <VideoPlayer videoId="78lDIA-Rhbw" />
      </div>
      <br />
      <br />

    </div>
  );
};

export default HomePage;
