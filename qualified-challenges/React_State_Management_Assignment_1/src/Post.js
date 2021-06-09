import React from "react";

function Post({ post, deletePost }) {
  console.log(`posts value:  ${post}`);
  console.log(typeof post);
  const pStyle = {
    padding: "20px",
    border: "2px solid black",
  };
  if (post.includes("http")) {
    return (
      <div style={pStyle} className="post">
        <img src={post} />
        <br />
        <button name="delete" onClick={deletePost}>
          delete
        </button>
      </div>
    );
  } else {
    return (
      <div style={pStyle} className="post">
        <p>{post}</p>

        <button name="delete" onClick={deletePost}>
          delete
        </button>
      </div>
    );
  }
}

export default Post;
