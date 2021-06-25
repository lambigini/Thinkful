import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import UserProfile from "./UserProfile";

function App() {
  function Home() {
    return <p>Home</p>;
  }

  function New() {
    return <p>Unable to create a new user</p>;
  }

  function NoMatch() {
    return <p>404 Not Found</p>;
  }

  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <Link to="/user/new">New User</Link>
      {Array(10)
        .fill()
        .map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`} data-testid={`user-${id}`}>
              User{id}
            </Link>
          </div>
        ))}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user/new">
          <New />
        </Route>

        <Route path="/user/:userId">
          <UserProfile />
        </Route>

        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
