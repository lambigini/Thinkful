// import React, { useEffect, useState } from "react";
// import Comments from "./Comments";
// import PostDetail from "./PostDetail";

// function App() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
//       .then((response) => response.json())
//       .then(setPosts)
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   console.log("post,", posts);
//   const handleDelete = (post) => {
//     console.log("click", post);

//     post.completed = !post.completed;
//     console.log("after click ", post);
//     setPosts((current) => current.map((post1, index) => post1));
//   };

//   const title = posts.map((post, index) => (
//     <li
//       key={post.id}
//       onClick={() => handleDelete(post)}
//       style={{ textDecoration: post.completed ? "line-through" : "" }}
//     >
//       {post.title}
//     </li>
//   ));

//   return (
//     <div>
//       <ol>{title}</ol>
//     </div>
//   );
// }

// export default App;

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

  // if (newPost.length > 1) {
  //   const comments = newPost.map((post, index) => {
  //     return <Comments post={post} key={index} />;
  //   });

  //   return (
  //     <div className="App">
  //       {postObject}
  //       {comments}
  //     </div>
  //   );
  // } else {
  //   return <div className="App">{postObject}</div>;
  // }

  const comments = newPost.map((post, index) => {
    return <Comments post={post} key={index} />;
  });

  return (
    <div className="App">
      {postObject}
      {comments}
    </div>
  );
}

export default App;
