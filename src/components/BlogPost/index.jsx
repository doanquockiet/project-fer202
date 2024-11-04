import React from 'react'

const BlogPost = ({ image, title, date, excerpt, link }) => (
    <div className="blog_post">
        <img src={image} alt={title} className="blog_image" />
        <div className="blog_content">
            <h3><a href={link}>{title}</a></h3>
            <p className="blog_date">{date}</p>
            <p className="blog_excerpt">{excerpt}</p>
        </div>
    </div>
);
export default BlogPost

