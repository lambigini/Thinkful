import React from "react";

function Constellation ({ constellation }) {
return (
  <div className="card col-12 col-md-4 rounded-0">
    <div className="card-body">
      <h5 className="card-title">
        {constellation.name} -{" "}
        <small className="text-muted">{constellation.meaning}</small>
      </h5>
      <p className="card-text">
        <strong>Stars with Planets: </strong>
        {constellation.starsWithPlanets}
      </p>
      <p className="card-text">
        <strong>Quadrant: </strong>
        {constellation.quadrant}
      </p>
    </div>
  </div>
);
}
export default Constellation;
