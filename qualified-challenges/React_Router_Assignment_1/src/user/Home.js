import React from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
function Home() {
  return <NavLink to="/">Return Home</NavLink>;
}

export default Home;
