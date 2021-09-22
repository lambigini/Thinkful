import React from "react";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();

  const homeClass = location.pathname === "/" ? "nav-item active" : "nav-item";

  return (
    <div className="bg-light mb-2">
      <nav className="container navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className={homeClass}>
              <Link className="nav-link" to="/">
                <span className="oi oi-home" /> Home
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/observations/new">
                <span className="oi oi-flash fs-2"></span>
                &nbsp;New Observation
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
