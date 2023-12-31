import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import './CommentList.css'

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:8000/api/comments/${videoId}`;

    axios.get(apiUrl, {
        headers: {
            Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, [videoId]);

  return (
    <div className="comment-list">
      <h2>Comments</h2>
      <br />
      <ul className="comment-items">
        {comments.map((comment) => (
          <li key={comment.id} className="comment-item">
            <strong>{comment.user.username}:</strong> {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
