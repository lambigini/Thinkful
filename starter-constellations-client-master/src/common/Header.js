import React from "react";
import Search from "../home/Search";

function Header({ constellations, setConstellations }) {
  return (
    <div className="jumbotron jumbotron-fluid bg-info text-white rounded-0 mb-0">
      <div className="container">
        <h1 className="display-4">I love Constellations</h1>
        <p className="lead">Explore different constellations in the sky!</p>
        <hr />
        <Search
          constellations={constellations}
          setConstellations={setConstellations}
        />
      </div>
    </div>
  );
}

export default Header;
