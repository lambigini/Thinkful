import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import { listDecks } from "../utils/api/index";

function CreateDeck() {
  // return <h2> inside CreateDeck function</h2>;
  // const [name, setName] = useState("");
  // const handleNameChange = (event) => setName(event.target.value);
  // console.log("Current value of name:", name);

  // const [description, setDescription] = useState("");
  // const handleDescriptionChange = (event) => setDescription(event.target.value);
  // console.log("Current value of description:", description);
  const [newId, setNewId] = useState(1);

  const history = useHistory();

  const initialFormState = {
    name: "default value of name",
    description: "default description",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    // console.log("target ", target);
    // console.log("target.name ", target.name);
    setFormData(
      (current) =>
        (current = {
          ...current,
          [target.name]: target.value,
        })
    );
  };

  const handleSubmit = (event) => {
    // console.log("Submitted: ", name, description);
    // setName((current) => (current = ""));
    // setDescription((current) => (current = ""));
    // console.log("Submitted: ", name, description);
    const abortController = new AbortController();
    event.preventDefault();

    createDeck(formData, abortController.signal).then((response) =>
      history.push(`/decks/${response.id}`)
    );
  };

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <br></br>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Deck Name"
            onChange={handleChange}
            value={formData.name}
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
          onChange={handleChange}
          value={formData.description}
        ></textarea>

        <br></br>
        <Link to="/" className="btn btn-secondary">
          Cancel
        </Link>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateDeck;
