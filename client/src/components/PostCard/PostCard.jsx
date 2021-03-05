import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = (props) => {
  return (
    <div className="post-card">
      <Link className="card" to={`/posts/${props._id}`}>
        <div className="left-card-container">
          <div className="top-half">
            <div className="post-title-home">{props.title}</div>
            <div className="post-author">{props.author}</div>
          </div>

          <div className="view-statement">View Post</div>
        </div>
        <img className="post-card-image" src={props.imgURL} alt={props.name} />
      </Link>
    </div>
  );
};

export default PostCard;
