import React, { useEffect, useState } from "react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import { readDeck } from "../utils/api";
import Breadcrumb from "./Breadcrumb";

function Study() {
  const [deckObject, setDeckObject] = useState({});
  const params = useParams();
  const { url } = useRouteMatch();
  const [cardNeedStudy, setCardNeedStudy] = useState({
    cards: [],
    cardNumber: 0,
    cardLength: 0,
    side: "front",
    flip: false,
  });

  useEffect(() => {
    const abortController = new AbortController();
    const deckObjectFromAPI = readDeck(params.deckId, abortController.signal)
      .then((response) => {
        setDeckObject((current) => (current = { ...current, ...response }));

        setCardNeedStudy(
          (current) =>
            (current = {
              ...current,
              cards: response.cards,
              cardLength: response.cards.length,
            })
        );
      })
      .catch((error) => console.log("ERROR", error));
  }, [params.deckId]);

  const handleButtonClick = () => {
    if (cardNeedStudy.side === "front") {
      setCardNeedStudy(
        (current) =>
          (current = {
            ...current,
            ["flip"]: !current["flip"],
            side: "back",
          })
      );
    } else {
      setCardNeedStudy(
        (current) =>
          (current = {
            ...current,
            ["flip"]: !current["flip"],
            side: "front",
          })
      );
    }
  };

  // console.log("side", side);
  // console.log("flip", flip);

  console.log("deckObject", deckObject);

  // console.log("cards ", cards);
  // console.log("deckObject.cards", deckObject.cards);

  // console.log("cards length ", cards.length);
  // console.log("cards[cardNumber]", cards[cardNumber]);

  if (cardNeedStudy.cardLength > 1) {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href={`${url}`}>{deckObject.name} </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <h5 className="card-title">{deckObject.name}</h5>
            </h5>

            <p className="card-text">
              {
                cardNeedStudy.cards[cardNeedStudy.cardNumber][
                  cardNeedStudy.side
                ]
              }
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleButtonClick}
            >
              Flip
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <h2> card length undefine</h2>;
  }
}

export default Study;
