import React from "react";
import { Route, Switch, Link } from "react-router-dom";
// TODO: Change the link below to go back to the home page.

export const PostsNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        {/* <a className="btn btn-link">Go Home</a> */}
        <Link to="/" className="btn btn-link">
          Go Home{" "}
        </Link>
      </li>
    </ol>
  </nav>
);

export default PostsNav;
