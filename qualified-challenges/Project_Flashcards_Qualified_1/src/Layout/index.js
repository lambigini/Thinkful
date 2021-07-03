import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { Homepage } from "../HomePage/HomePage";
import { listDecks } from "../utils/api/index";
import Header from "./Header";
import NotFound from "./NotFound";

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

  console.log("layout page");

  return (
    <div>
      <Header />

      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Homepage listDesks={listDesks} />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
