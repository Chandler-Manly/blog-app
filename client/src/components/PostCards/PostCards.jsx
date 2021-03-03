import PostCard from "../PostCard/PostCard";
import { getPosts } from "../../services/posts";
import "./PostCards.css";

class PostCards extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const posts = await getPosts();
    this.setState({ posts });
  }

  render() {
    const CARDS = this.state.posts
      .reverse()
      .map((post, index) =>
        index < 2 ? (
          <PostCard
            _id={post._id}
            name={post.title}
            imgURL={post.imgURL}
            key={index}
          />
        ) : null
      );

    return (
      <div className="post-cards">
        <div className="latest">LATEST</div>
        <div className="cards">{CARDS}</div>
      </div>
    );
  }
}

export default PostCards;
