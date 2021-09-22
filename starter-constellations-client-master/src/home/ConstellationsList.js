import React from "react";
import Constellation from "./Constellation";
import NoConstellationsMessage from "./NoConstellationsMessage";

function ConstellationsList ({ constellations }) {
  if (!constellations.length) return <NoConstellationsMessage />;

  const cards = constellations.map((constellation) => (
    <Constellation key={constellation.id} constellation={constellation} />
  ));
  return (
    <div className="container">
      <div className="row">{cards}</div>
    </div>
  );
};

export default ConstellationsList;
