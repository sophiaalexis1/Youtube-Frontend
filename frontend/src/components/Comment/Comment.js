import React from 'react';
import CommentList from '../CommentList/CommentList.js'
import CommentForm from '../CommentForm/CommentForm.js';
import './Comment.css'

const Comment = ({ videoId }) => {
  return (
    <div className="comment-container">
      <CommentList videoId={videoId} />
      <CommentForm videoId={videoId} />
    </div>
  );
};

export default Comment;
