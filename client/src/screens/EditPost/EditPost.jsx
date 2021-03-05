import React, { useState, useEffect } from "react";
import './EditPost.css'
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getPost, updatePost } from "../../services/posts";

const EditPost = (props) => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    imgURL: "",
    content: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updatePost(id, post);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="post-edit">
        <div className="image-section">
          <img className="edit-post-image" src={post.imgURL} alt={post.title} />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image link"
              value={post.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-written-form" onSubmit={handleSubmit}>
          <input
            className="input-edit-title"
            placeholder="Title"
            value={post.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-edit-author"
            placeholder="Author"
            value={post.author}
            name="author"
            required
            onChange={handleChange}
          />
          <textarea
            className="input-edit-content"
            rows={11}
            cols={70}
            placeholder="Content"
            value={post.content}
            name="content"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default EditPost;
