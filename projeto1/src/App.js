import "./App.css";
import { Component } from "react";

import { Post } from "./components/Post";
import { loadPost } from "./utils/loadPosts";

class App extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 50,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPost();

    const {posts, allPosts, page, postsPerPage} = this.state;
    this.setState({posts: allPosts.slice(page, postsPerPage)});
  }

  postSearch = (e) => {
    const { value } = e.target;

    const {posts, allPosts, searchValue} = this.state;

    this.setState({searchValue: value});
  }

  methodButton = () => {
    const {page, postsPerPage, allPosts, posts} = this.state;

    const pageSum = page + postsPerPage;
    const nextPage = pageSum + postsPerPage;
    const nextPosts = allPosts.slice(pageSum, nextPage);
    posts.push(...nextPosts)

    this.setState({ posts, page : nextPage});
  }
  
  loadPost = async () => {
    const postsAndPhotos = await loadPost();
    this.setState({ allPosts: postsAndPhotos });
  }

  render() {
    const { posts, allPosts, searchValue } = this.state;

    var bool = false;

    if (posts.length === allPosts.length) {
      bool = true;
    }

    const filterPost = !!searchValue ?
      posts.filter((item) => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase());
    }):posts

    return (
      <section className="container">
        <input 
        type="search" 
        onChange={this.postSearch}
        /> <br /> <br /> <br />
        <Post 
        posts={filterPost} />
        <button onClick={this.methodButton} disabled={bool}>Load more pages</button>
      </section>
    );
  }
}

export default App;
