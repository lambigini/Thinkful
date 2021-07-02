import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./Layout/NotFound";
import ViewAllDesk from "./Layout/Desk/ViewAllDesk";
import Study from "./Layout/Desk/Study";
/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
  return (
    <div className="app-routes">
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>

        <Route exact path="/decks/:deckId">
          <ViewAllDesk />
        </Route>

        <Route path="/decks/:deckId/study">
          <Study />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
