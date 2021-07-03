import React from "react";
import { Route, Switch } from "react-router";
import Decklist from "./DeckList";
import NotFound from "../Layout/NotFound";
export function Homepage({ listDesks, handleDeleteButton }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Decklist
            listDesks={listDesks}
            handleDeleteButton={handleDeleteButton}
          />
        </Route>
      </Switch>
    </div>
  );
}
