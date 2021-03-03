import { Link } from "react-router-dom";
import "./Postcard.css";

const PostCard = (props) => {
  return (
    <div className="post-card">
      <Link className="card" to={`/posts/${props._id}`}>
        <div className="post-title">{props.title}</div>
        <div className="post-author">{props.author}</div>
        <img className="post-card-image" src={props.imgURL} alt={props.name} />
        <div>View Post</div>
      </Link>
    </div>
  );
};

export default PostCard;
