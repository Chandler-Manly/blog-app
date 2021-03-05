import { useState, useEffect } from "react";
import "./PostDetails.css";
import Layout from "../../components/shared/Layout/Layout";
import { getPost, deletePost } from "../../services/posts";
import { useParams, Link, useHistory } from "react-router-dom";

const PostDetails = (props) => {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setLoaded(true);
    };
    fetchPost();
  }, [id]);

  if (!isLoaded) {
    return <h1>Still writing...</h1>;
  }
  

  const handleDelete = async () => {
    await deletePost(post._id);
    history.push("/posts");
  };

  return (
    <div>
      <Layout>
        <div className="post-details">
          <div className="show-title">{post.title}</div>
          <div className="show-author">Author Name: {post.author}</div>
          <div className="show-image">
          <img className="show-image" src={post.imgURL} alt={post.title} />
          </div>
          <div className="show-content">{post.content}</div>
          <button className="edit-button">
            <Link className="edit-link" to={`/posts/${post._id}/edit`}>
              Edit
            </Link>
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default PostDetails;
