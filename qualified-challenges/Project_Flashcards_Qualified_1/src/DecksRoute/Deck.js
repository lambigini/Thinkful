import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import { deleteDeck, listCards, readDeck } from "../utils/api";
import CardComponent from "./CardComponent";

function Deck() {
  // return <h2> inside Deck function</h2>;
  // get the list of deck
  // find  the deck id that match from list of decks
  // get the deck name
  const { deckId } = useParams();
  const history = useHistory();
  const [currentDeck, setCurrentDeck] = useState({
    id: 0,
    name: "",
    description: "",
  });
  const [listCurrentCards, setListCurrentCards] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function getCurrentDeck() {
      const response = await readDeck(deckId, abortController.signal);

      setCurrentDeck((current) => ({ ...current, ...response }));

      const listCardsFromAPI = await listCards(deckId, abortController.signal);

      setListCurrentCards((current) => (current = listCardsFromAPI));
    }
    getCurrentDeck();
  }, [deckId]);

  // console.log("deckId ", deckId);

  // console.log("currentDeck ", currentDeck);
  // console.log("currentDeck.name ", currentDeck.name);
  // console.log("listDesks 1 ", listDesks[0]);

  console.log("listCurrentCards ", listCurrentCards);
  console.log("listCurrentCards[0] ", listCurrentCards[0]);

  const cards = listCurrentCards.map((card, index) => (
    <CardComponent key={index} card={card} />
  ));

  const handleDeleteButton = (event) => {
    console.log("event ", event);
    const abortController = new AbortController();
    const message = "Do you really want to Delete this Deck?";
    const result = window.confirm(message);
    {
      result &&
        deleteDeck(deckId, abortController.signal).then((respone) => {
          history.push("/");
          window.location.reload();
        });
    }
  };

  console.log("cards ", cards);
  if (currentDeck && cards) {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {/* <li className="breadcrumb-item">
            <Link to={`/decks/${deck.Id}`}>{deck.name}</Link>
          </li> */}
            <li className="breadcrumb-item active" aria-current="page">
              {currentDeck.name}
            </li>
          </ol>
        </nav>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{currentDeck.name}</h5>
            <p className="card-text">{currentDeck.description}</p>
            <Link to="/decks/:deckId/edit" className="btn btn-secondary">
              Edit
            </Link>

            <Link
              to={`/decks/${currentDeck.id}/study`}
              className="btn btn-primary"
            >
              Study
            </Link>
            <Link to="/decks/:deckId/cards/new" className="btn btn-primary">
              Add Card
            </Link>
            <button className="btn btn-danger" onClick={handleDeleteButton}>
              Delete
            </button>
          </div>
        </div>
        <h2>Cards</h2>

        {cards}
        <h2>After Card</h2>
      </div>
    );
  }

  return <h2>...Loading</h2>;
}

export default Deck;
