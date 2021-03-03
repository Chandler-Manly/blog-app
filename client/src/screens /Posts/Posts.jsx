import { useState, useEffect } from 'react';
import './Posts.css'

import Post from '../../components/Post/Post';
import Search from '../../components/Search/Search';
import Layout from '../../components/shared/Layout/Layout';
import { getPosts } from '../../services/posts';

const Posts = (props) => {
  const [allPosts, setAllPosts] = useState([])
  const [queriedPosts, setQueriedPosts] = useState([])
  const [sortType, setSortType] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setAllPosts(posts)
      setQueriedPosts(posts)
    }
    fetchPosts()
  }, [])

  // Comment: If we want to sort our blog post by date, popularity (like button) or another method this can be used for starter code!
  
  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "author-ascending":
        setQueriedPosts(AZ(queriedPosts))
        break
      case "author-descending":
        setQueriedPosts(ZA(queriedPosts))
        break
      default:
        break
    }
  }

  const handleSearch = event => {
    const newQueriedPosts = allPosts.filter(post => post.author.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedPosts(newQueriedPosts, () => handleSort(sortType))
  }

  const handleSubmit = event => event.preventDefault()

  const postsJSX = queriedPosts.map((post, index) =>
    <Post _id={post._id} name={post.author} imgURL={post.imgURL} content={post.content} key={index} />
  )

  return (
    <Layout>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Sort onSubmit={handleSubmit} onChange={handleSort} />
      <div className="posts">
        {postsJSX}
      </div>
    </Layout>
  )
}


export default Posts;