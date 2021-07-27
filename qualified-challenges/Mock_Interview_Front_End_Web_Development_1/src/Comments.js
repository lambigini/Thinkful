import React, { useEffect, useState } from "react";

function Comments({ post }) {
  return <h2> Comment {post.body}</h2>;
}

export default Comments;
