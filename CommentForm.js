import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ postId, onCommentAdded }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/comments', { content: comment, blogPost: { id: postId } })
            .then(response => {
                setComment('');
                if (onCommentAdded) onCommentAdded(response.data);
            })
            .catch(error => {
                console.error('There was an error adding the comment!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Comment:</label>
                <textarea 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Add Comment</button>
        </form>
    );
};

export default CommentForm;
