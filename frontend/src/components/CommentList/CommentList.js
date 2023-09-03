import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const CommentList = ({ videoId }) => {
  // State variable to store comments
  const [comments, setComments] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = `http://127.0.0.1:8000/api/comments/${videoId}`;

    // Make an HTTP GET request to fetch comments
    axios.get(apiUrl, {
        headers: {
            Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        // Set the comments in the state
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, [videoId]);

  return (
    <div className="comment-list">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.user.username}:</strong> {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
