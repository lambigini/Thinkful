import React, { useEffect, useState } from "react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import { readDeck } from "../utils/api";
import Breadcrumb from "./Breadcrumb";

function Study() {
  //   return <h2> inside Study function</h2>;
  //get the object call from api with deck get from useParam
  //show card 1 "front"
  // click on "flip" show the "back" and the "next" button

  const [deckObject, setDeckObject] = useState({});
  const params = useParams();
  const { url } = useRouteMatch();
  const [cards, setCards] = useState([]);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const deckObjectFromAPI = readDeck(
      params.deckId,
      abortController.signal
    ).then((response) => {
      setDeckObject(response);
      setCards(response.cards);
    });
  }, [params.deckId]);

  const cardComponent = cards.map((card) => card);
  const handleButtonClick = () => {
    setFlip((current) => (current = !current));
  };

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

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{deckObject.name}</h5>

          <p class="card-text">
            {flip ? cardComponent[0].front : cardComponent[0].back}
          </p>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={handleButtonClick}
          >
            Flip
          </button>
        </div>
      </div>
    </div>
  );
}

export default Study;
