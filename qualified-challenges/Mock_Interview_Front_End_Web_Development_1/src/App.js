import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [newPost, setNewPost] = useState([]);

  const handleClick = (post) => {
    console.log("post", post);
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => response.json())
      .then(setNewPost);

    console.log("newPost", newPost);
  };

  const postObject = posts.map((post, index) => {
    return (
      <PostDetail
        post={post}
        key={index}
        handleClick={() => handleClick(post)}
      />
    );
  });

  if (newPost.length > 1) {
    const comments = newPost.map((post, index) => {
      return <Comments post={post} key={index} />;
    });

    return (
      <div className="App">
        {postObject}
        {comments}
      </div>
    );
  } else {
    return <div className="App">{postObject}</div>;
  }
}

export default App;
