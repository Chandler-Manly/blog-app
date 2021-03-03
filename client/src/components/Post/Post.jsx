import React from "react";
import { Link } from "react-router-dom";
// import "./Post.css"

const Post = (props) => {
  return (
    <div>
      <Link className="post" to={`/posts/${props.id}`}>
        <div className="post-title">{props.title}</div>
        <div className="post-author">{props.author}</div>
        <img className="post-img" src={props.imgURL} alt={props.title} />
        <div className="post-content">{props.content}</div>
      </Link>
    </div>
  );
};

export default Post;
