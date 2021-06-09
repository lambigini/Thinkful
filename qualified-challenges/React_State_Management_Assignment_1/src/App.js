import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);

  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  // TODO: Add the ability for the <PostList /> component to delete an existing post.

  const createPost = (newPost) => {
    return setPosts((currentPost) => [newPost, ...currentPost]);
  };
  console.log("post: ", posts);
  const deletePost = (indexToDelete) => {
    return setPosts((currentPost) =>
      currentPost.filter((post, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="App">
      <PostCreate createPost={createPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;
