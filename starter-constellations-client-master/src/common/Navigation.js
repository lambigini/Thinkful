import React from "react";

function Navigation () {
return (
  <ul className="nav justify-content-center bg-light py-2">
    <li className="nav-item">
      <button className="btn btn-link nav-link active">Home</button>
    </li>
    <li className="nav-item">
      <button className="btn btn-link nav-link">About</button>
    </li>
  </ul>
);
}

export default Navigation;
