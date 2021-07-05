import React, { useEffect, useState } from "react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import { readDeck } from "../utils/api";
import Breadcrumb from "./Breadcrumb";

function Study({ listDesks }) {
  //   return <h2> inside Study function</h2>;
  //get the object call from api with deck get from useParam
  //show card 1 "front"
  // click on "flip" show the "back" and the "next" button

  const [deckObject, setDeckObject] = useState({});
  const params = useParams();
  const { url } = useRouteMatch();
  console.log("params ", params);
  console.log("params.deckId ", params.deckId);
  console.log("url ", url);

  useEffect(() => {
    const abortController = new AbortController();
    const deckObjectFromAPI = readDeck(
      params.deckId,
      abortController.signal
    ).then((response) => setDeckObject(response));
  }, [params.deckId]);

  console.log("deckObject ", deckObject);
  console.log("deckObject.id ", deckObject.id);
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href={`${url}`}>{deckObject.name} </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Study;
