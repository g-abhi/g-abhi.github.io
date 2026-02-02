import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';

const BlogsHub = () => {
    return (
        <Routes>
            <Route index element={<BlogList />} />
            <Route path=":id" element={<BlogPost />} />
        </Routes>
    );
};

export default BlogsHub;
