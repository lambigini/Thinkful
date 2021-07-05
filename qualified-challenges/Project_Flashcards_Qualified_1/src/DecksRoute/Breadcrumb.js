import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

function Breadcrumb() {
  //   return <h2> inside Breadcrumb function</h2>;

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="study route">Title = deck.name </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
