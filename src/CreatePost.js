import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title,
                body,
            });
            alert('게시글이 작성되었습니다!');
            setTitle('');
            setBody('');
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>게시글 작성</h1>
            <div>
                <label>제목:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>내용:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required />
            </div>
            <button type="submit">작성</button>
        </form>
    );
};

export default CreatePost;
