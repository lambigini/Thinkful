import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

function CreateDeck() {
  // return <h2> inside CreateDeck function</h2>;
  //breadcrumb
  // a form

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">Create Deck</li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
      <form>
        <label htmlFor="name">
          Name:
          <br></br>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Deck Name"
            // onChange={handleNameChange}
            // value={name}
          />
        </label>
        <br></br>
        <label htmlFor="description">Description: </label>
        <br></br>
        <textarea
          id="description"
          type="text"
          name="description"
          required
          placeholder="Brief description of the deck"
          autoFocus="on"
          rows="10"
          cols="20"
          // onChange={handleDescriptionChange}
          // value={description}
        ></textarea>

        <br></br>
        <Link to="/" class="btn btn-secondary">
          Cancel
        </Link>
        <Link to="/decks/:deckId" class="btn btn-primary">
          Submit
        </Link>
      </form>
    </div>
  );
}

export default CreateDeck;
