import React from "react";
import { NavLink, useParams, useRouteMatch } from "react-router-dom";
/*
  TODO: Change the below to be a link that goes to the specific post route using the post id.
*/

export const PostLink = ({ post }) => {
  const { postId } = useParams();
  const { url } = useRouteMatch();

  return (
    <li className="list-group-item text-truncate">
      {/* <a>{post.title}</a> */}
      <NavLink to={`${url}/${post.id}`}>{post.title} </NavLink>
    </li>
  );
};

export default PostLink;
