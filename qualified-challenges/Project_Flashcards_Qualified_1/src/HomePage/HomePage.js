import React from "react";
import { Route, Switch } from "react-router";
import Decklist from "./DeckList";
import NotFound from "../Layout/NotFound";
export function Homepage({ listDesks }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Decklist listDesks={listDesks} />
        </Route>
      </Switch>
    </div>
  );
}
