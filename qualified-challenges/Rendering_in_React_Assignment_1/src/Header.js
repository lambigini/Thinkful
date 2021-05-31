import React from "react";
import "./Header.css";

function Header({ name, imageSrc, birthday }) {
  return (
    <div className="header">
      <div className="img">
        <img src={imageSrc} alt="white-cat" />
      </div>

      <div className="info">
        <h1>{name}</h1>
        <h2>{birthday}</h2>
      </div>
    </div>
  );
}

export default Header;
