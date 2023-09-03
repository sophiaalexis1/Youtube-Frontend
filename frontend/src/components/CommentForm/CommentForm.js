import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import './CommentForm.css'


const CommentForm = () => {
    const [comment, setComment] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [user, token] = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response = await axios.post('http://127.0.0.1:8000/api/comments/', {
                headers: {
                    Authorization: "Bearer " + token,
                } 
            });

            console.log('Comment submitted:', response.data);
            setComment('');
            setSuccessMessage('Comment submitted successfully.');
            setErrorMessage('');

        } catch (error) {
            console.error('Error submitting comment:', error);
            setSuccessMessage('');
            setErrorMessage('Error submitting comment. Please try again.');
        }
    };


    return (
        <div className="comment-form">
            <h2>Add a Comment</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    rows="4"
                    cols="50"
                    placeholder="Write your comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Submit</button>
                {successMessage && <div className="success-message">{successMessage}</div>}
                {errorMessage && <div className="error-message">{errorMessage}</div>}

            </form>
        </div>
    );
};

export default CommentForm;
