import React from "react";
import { Link, Route, Switch } from "react-router-dom";
function Desk({ desk }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{desk.name}</h5>
        <p>{desk.cards.length} cards</p>
        <p className="card-text">{desk.description}</p>
        <Link to={`/decks/${desk.id}`} className="btn btn-secondary">
          View
        </Link>

        <Link to={`/decks/${desk.id}/study`} className="btn btn-primary">
          {console.log("desk", desk)}
          Study
        </Link>
        <Link className="btn btn-danger">Delete</Link>
      </div>
    </div>
  );
}

export default Desk;
