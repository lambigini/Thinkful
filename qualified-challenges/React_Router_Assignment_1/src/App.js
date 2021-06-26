import React, { Fragment } from "react";
import { Route, Switch } from "react-router";

import Header from "./common/Header";
import NotFound from "./common/NotFound";
import CardList from "./home/CardList";
import User from "./user/User";

function App() {
  /*
    TODO: There is no need to add a <Router >, it is in index.js.

    The <CardList /> component should be shown when the user is on the index path.

    The <User /> component should be shown when the user is on the following path:
    /users/:userId

    Display <NotFound /> when appropriate
  */
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/users/:userId">
          <User />
        </Route>

        <Route exact path="/">
          <CardList />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
