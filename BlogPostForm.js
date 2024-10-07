import React, { useState } from 'react';
import axios from 'axios';

const BlogPostForm = ({ onPostCreated }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/blogposts', { title, content })
            .then(response => {
                setTitle('');
                setContent('');
                if (onPostCreated) onPostCreated(response.data);
            })
            .catch(error => {
                console.error('There was an error creating the blog post!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Create Blog Post</button>
        </form>
    );
};

export default BlogPostForm;
