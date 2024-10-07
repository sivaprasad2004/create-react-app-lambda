import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogPostList = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        // Fetch blog posts from the Spring Boot API
        axios.get('/api/blogposts')
            .then(response => {
                setBlogPosts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the blog posts!', error);
            });
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            {blogPosts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <div>
                        <strong>Comments:</strong>
                        {post.comments && post.comments.length > 0 ? (
                            <ul>
                                {post.comments.map(comment => (
                                    <li key={comment.id}>{comment.content}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No comments yet.</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogPostList;
