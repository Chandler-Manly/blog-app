import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="all-views-post-container">
      <Link className="all-views-post" to={`/posts/${props._id}`}>
        <div className="all-views-left-card-container">
          <div className="all-views-top-half">
            <div className="all-views-post-title">{props.title}</div>
            <div className="all-views-post-author">{props.author}</div>
          </div>
          <div className="all-views-view-statement">View Post</div>
          </div>
          <img className="all-views-post-img" src={props.imgURL} alt={props.title} />
        
      </Link>
    </div>
  );
};

export default Post;
