import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Blog.css';

const Blog = () => (
  <>
    <Helmet><title>Blog - Tiranga Green</title></Helmet>
    <div className="page">
      <div className="container">
        <h1>Blog & News</h1>
        <p>Latest updates about solar energy and industry trends</p>
      </div>
    </div>
  </>
);

export default Blog;
