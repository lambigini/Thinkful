// import React from "react";
// import { Route, useParams, useRouteMatch } from "react-router";

// /*
//   TODO: Change the below to be a link that goes to the specific post route using the post id.
// */

// export const PostLink = ({ post }) => {
//   const { postId } = useParams();
//   const { url } = useRouteMatch();

//   console.log(" url postlink", url);
//   return (
//     <li className="list-group-item text-truncate">
//       {/* <a>{post.title}</a> */}
//       <Route path={`${url}/${post.id}`}> {post.title}</Route>
//     </li>
//   );
// };

// export default PostLink;

import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";

/*
  TODO: Change the below to be a link that goes to the specific post route using the post id.
*/

export const PostLink = ({ post }) => {
  const { url } = useRouteMatch();

  return (
    <li className="list-group-item text-truncate">
      <Link to={`${url}/${post.id}`}>{post.title}</Link>
    </li>
  );
};

export default PostLink;
