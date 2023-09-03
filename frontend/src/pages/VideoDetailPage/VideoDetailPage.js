import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import axios from 'axios';
import './VideoDetailPage.css'

const VideoDetailPage = () => {
  const { videoId } = useParams();


  console.log('VideoDetailPage rendered with videoId:', videoId);

  return (
    <div className="container">
      <h1>Video Player</h1>
      <p>Video ID: {videoId}</p>
      <div className='video-related'>
        <VideoPlayer videoId={videoId} />
        <RelatedVideos videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoDetailPage;
