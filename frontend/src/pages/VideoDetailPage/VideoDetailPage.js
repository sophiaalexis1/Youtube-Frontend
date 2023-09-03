import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import axios from 'axios';
import './VideoDetailPage.css'
import Comment from '../../components/Comment/Comment';
import SearchBar from '../../components/SearchBar/SearchBar';
import VideoPlayer2 from '../../components/VideoPlayer2/VideoPlayer2';

const VideoDetailPage = () => {
  const { videoId } = useParams();


  console.log('VideoDetailPage rendered with videoId:', videoId);

  return (
    <div className="container">
      <SearchBar />
      <br />
      <p>Video ID: {videoId}</p>
      <br />
      <br />
      <div className="video-related">
        <div className="video-player-container">
          <VideoPlayer2 videoId={videoId} />
          <br />
          <br />
          <Comment videoId={videoId} />
        </div>
        <div className="related-videos-container">
          <RelatedVideos videoId={videoId} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetailPage;
