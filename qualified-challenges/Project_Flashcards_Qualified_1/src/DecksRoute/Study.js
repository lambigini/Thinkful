import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { readDeck } from "../utils/api";
import Breadcrumb from "./Breadcrumb";

function Study() {
  const [deckObject, setDeckObject] = useState({});
  const params = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();

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
  function restartCard() {
    const message = "Restart card?";
    const result = window.confirm(message);
    {
      result ? window.location.reload() : history.push("/");
    }
  }
  const handleNextButton = () => {
    console.log("handle next button logic");

    // change current card to next card
    if (cardNeedStudy.cardNumber < cardNeedStudy.cardLength) {
      console.log("Before cardNeedStudy.cardLength", cardNeedStudy.cardLength);
      console.log("Before cardNeedStudy.cardNumber", cardNeedStudy.cardNumber);
      setCardNeedStudy(
        (current) =>
          (current = {
            ...current,
            ["cardNumber"]: current.cardNumber++,
            ["side"]: "front",
            ["flip"]: !current["flip"],
          })
      );
      console.log("After cardNeedStudy.cardLength", cardNeedStudy.cardLength);
      console.log("After cardNeedStudy.cardNumber", cardNeedStudy.cardNumber);
      if (
        cardNeedStudy.cardNumber === cardNeedStudy.cardLength - 1 &&
        cardNeedStudy.flip
      ) {
        restartCard();
      }
    }
  };

  // console.log("cardNeedStudy.cardLength", cardNeedStudy.cardLength);
  // console.log("cardNeedStudy.cardNumber", cardNeedStudy.cardNumber);
  // console.log("side", side);
  // console.log("flip", flip);

  // console.log("deckObject", deckObject);

  // console.log("cards ", cards);
  // console.log("deckObject.cards", deckObject.cards);

  // console.log("cards length ", cards.length);
  // console.log("cards[cardNumber]", cards[cardNumber]);

  if (cardNeedStudy.cards.length) {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href={`${url}`}>Rendering in React </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{deckObject.name}</h5>

            <h6 className="card-subtitle mb-2 text-muted">
              Card {cardNeedStudy.cardNumber + 1} of {cardNeedStudy.cardLength}
            </h6>
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

            {cardNeedStudy.flip ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNextButton}
                id="nextBtn"
              >
                Next
              </button>
            ) : (
              console.log("click next button Do Nothing")
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <h2> card length undefine</h2>;
  }
}

export default Study;
