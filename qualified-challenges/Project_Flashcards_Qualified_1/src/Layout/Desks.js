import React from "react";
import Desk from "./Desk";

function Desks({ listDesks }) {
  console.log("listDesks in Desks", listDesks);
  const listNumOfDesks = listDesks.map((desk) => {
    return (
      <div className="card" key={desk.id}>
        <div className="card-body">
          <h5 className="card-title">{desk.name}</h5>
          <p>{desk.cards.length} cards</p>
          <p className="card-text">{desk.description}</p>

          <button type="button" className="btn btn-secondary">
            View
          </button>
          <button type="button" className="btn btn-primary">
            Study
          </button>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    );
  });

  console.log("listNumOfDesks", listNumOfDesks);
  return (
    // list of desks
    <div>
      {listNumOfDesks}
      {/* <Desk /> */}
    </div>
  );
}
export default Desks;
