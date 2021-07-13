import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";

function CardComponent({ card }) {
  console.log("card in CardComponent ", card);

  return (
    <div class="card">
      <div class="container" class="card">
        <div class="row justify-content-start">
          <div class="col-6">{card.front}</div>
          <div class="col-6">{card.back}</div>

          <div class="d-flex flex-row bd-highlight mb-3 justify-content-end">
            <div class="p-2 bd-highlight">
              {" "}
              <Link
                to={`/decks/${card.deckId}/cards/${card.id}/edit`}
                class="btn btn-secondary"
              >
                Edit
              </Link>
            </div>
            <div class="p-2 bd-highlight">
              <button type="button" class="btn btn-danger">
                Danger
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
