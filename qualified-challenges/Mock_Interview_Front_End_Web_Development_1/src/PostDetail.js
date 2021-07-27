import React, { useEffect, useState } from "react";

function PostDetail({ post, handleClick }) {
  return (
    <div>
      <p>TITLE: {post.title}</p>
      <p onClick={handleClick}> {post.body}</p>
    </div>
  );
}

export default PostDetail;
