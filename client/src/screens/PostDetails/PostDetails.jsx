import { useState, useEffect } from "react";
// import "./PostDetails.css";
import Layout from "../../components/shared/Layout/Layout";
import { getPost, deletePost } from "../../services/posts";
import { useParams, Link, Redirect } from "react-router-dom";


const PostDetails = (props) => {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
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
  

  return (
    <div>
      <Layout>
        <div className="post-details">
          <div className="title">{post.title}</div>
          <div className="author">{post.author}</div>
          <img className="image" src={post.imgURL} alt={post.title} />
          <div className="content">{post.content}</div>
          <button className="edit-button">
            <Link className="edit-link" to={`/posts/${post._id}/edit`}>
              Edit
            </Link>
          </button>
          <button
            className="delete-button"
            onClick={() => deletePost(post._id)}
          >
            <Link className="delete-link" to={`/posts`}>
              Delete
            </Link>
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default PostDetails;
