import React, { useEffect, useState } from "react";
function Card({ cards }) {
  //   console.log("cards.cards", cards.cards[0].id);
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Study: {cards.name}</h1>
        <h6 className="card-subtitle mb-2 text-muted">
          Card 1 of {`${cards.cards[0].id}`}
        </h6>
        {/* <p className="card-text">{deckObject.cards[0].front}</p> */}

        <button type="button" class="btn btn-secondary">
          Flip
        </button>
      </div>
    </div>
  );
}

export default Card;
