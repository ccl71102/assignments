import React from "react";

const BlogPost = props => 
<div className="blogpost">
    <h2 className="blogpost-title">{props.title}</h2>
    <h3 className="blogpost-subtitle">{props.subtitle}</h3>
    <p className="blogpost-author-date">Posted by
    <span className="blogpost-author"> {props.author} </span>
    on {props.date}
    </p>
</div>

export default BlogPost;