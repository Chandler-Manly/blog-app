// import "./PostCreate.css";
import Layout from "../../components/shared/Layout/Layout";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { createPost } from "../../services/posts";
import "./CreatePost.css";

const PostCreate = (props) => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    imgURL: "",
    content: "",
  });
  const [isCreated, setCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/posts`} />;
  }

  return (
    <Layout>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-heading">Add Your Own Post</div>
          <input
            className="input-title"
            placeholder="Title of Post"
            value={post.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-author"
            placeholder="Author"
            value={post.author}
            name="author"
            required
            onChange={handleChange}
          />
          <input
            className="input-img"
            placeholder="Image URL"
            value={post.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
          <input
            className="input-content"
            placeholder="What's on your mind?"
            value={post.content}
            name="content"
            required
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default PostCreate;
