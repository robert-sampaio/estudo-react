import "./App.css";
import { Component } from "react";

import { Post } from "./components/Post";
import { loadPost } from "./utils/loadPosts";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    await this.loadPost();
  }
  
  loadPost = async () => {
    const postsAndPhotos = await loadPost();
    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Post 
        posts={posts} />
      </section>
    );
  }
}

export default App;
