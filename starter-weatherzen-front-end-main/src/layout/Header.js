import React from "react";
import headerImage from "./header.jpg";

const style = {
  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${headerImage})`,
  backgroundPosition: "center",
  backgroundSize: "100% auto",
};

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid text-white mb-0" style={style}>
      <div className="container">
        <h1 className="display-1">WeatherZen</h1>
        <p className="lead">Crowdsourcing local weather observations!</p>
      </div>
    </div>
  );
}

export default Header;
