import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Capítulo 1",
        body: "Lorem ipsum",
      },
      {
        id: 2,
        title: "Capítulo 2",
        body: "Lorem ipsum",
      },
      {
        id: 3,
        title: "Capítulo 3",
        body: "Lorem ipsum",
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map((posts) => (
          <div key={posts.id}>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
