import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api/index";
import Desks from "./Desks";
import { Switch, Route } from "react-router-dom";
import Study from "./Desk/Study";
function Layout() {
  const [listDesks, setListDesks] = useState([]);

  useEffect(() => {
    async function getListOfDesk() {
      const listOfDesksFromAPI = await listDecks();

      setListDesks((current) => (current = listOfDesksFromAPI));
    }

    getListOfDesk();
    // console.log("listDesks", listDesks);
  }, []);

  // console.log("listDesks", listDesks);

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}

        <button onClick={() => console.log("button clicked")}>
          {" "}
          Create Desk
        </button>

        <Desks listDesks={listDesks} />

        {/* <NotFound /> */}
      </div>
      <Switch>
        <Route path="/decks/:deckId/study">
          <Study />
        </Route>
      </Switch>
    </>
  );
}

export default Layout;
