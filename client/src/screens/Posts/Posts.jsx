import { useState, useEffect } from "react";
import "./Posts.css";

import Post from "../../components/Post/Post";
import Search from "../../components/Search/Search";
import Layout from "../../components/shared/Layout/Layout";
import { getPosts } from "../../services/posts";

const Posts = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  const [queriedPosts, setQueriedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setAllPosts(posts);
      setQueriedPosts(posts);
    };
    fetchPosts();
  }, []);

  const handleSearch = (event) => {
    const newQueriedPosts = allPosts.filter((post) =>
      post.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedPosts(newQueriedPosts);
  };

  const handleSubmit = (event) => event.preventDefault();

  const postsJSX = queriedPosts.map((post, index) => (
    <Post
      _id={post._id}
      title={post.title}
      author={post.author}
      imgURL={post.imgURL}
      key={index}
    />
  ));

  return (
    <Layout>
      <div className="post-screen-container">
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <div className="posts">{postsJSX}</div>
      </div>
    </Layout>
  );
};

export default Posts;
