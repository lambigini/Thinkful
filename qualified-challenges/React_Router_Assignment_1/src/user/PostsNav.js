import React from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
// TODO: Change the link below to go back to the home page.

export const PostsNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        {/* <a className="btn btn-link">Go Home</a> */}
        <NavLink to="/">Go Home</NavLink>
      </li>
    </ol>
  </nav>
);

export default PostsNav;
