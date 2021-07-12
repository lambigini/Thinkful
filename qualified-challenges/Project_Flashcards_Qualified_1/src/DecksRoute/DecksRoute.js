import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Study from "./Study";
import CreateDeck from "./CreateDeck";
import Deck from "./Deck";
import EditDeck from "./EditDeck";
import AddCard from "./AddCard";
import EditCard from "./EditCard";
import DeckHome from "./DeckHome";

function DecksRoute() {
  // return <h2>DecksRoute function</h2>;

  return (
    <div>
      <Switch>
        <Route exact path="/decks/">
          <DeckHome />
        </Route>

        <Route path="/decks/new">
          <CreateDeck />
        </Route>
        <Route exact path="/decks/:deckId">
          <Deck />
        </Route>

        <Route path="/decks/:deckId/study">
          <Study />
        </Route>

        <Route path="/decks/:deckId/edit">
          <EditDeck />
        </Route>

        <Route path="/decks/:deckId/cards/new">
          <AddCard />
        </Route>

        <Route path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>
      </Switch>
    </div>
  );
}

export default DecksRoute;
