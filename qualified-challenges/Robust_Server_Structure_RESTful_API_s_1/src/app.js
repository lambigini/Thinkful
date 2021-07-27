const express = require("express");
const app = express();

const notes = require("./data/notes-data");

app.get("/notes/:noteId", (req, res) => {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  res.json({ data: foundNote });
});

app.get("/notes", (req, res) => {
  res.json({ data: notes });
});

// TODO: Add ability to create a new note

// TODO: add not found handler

// TODO: Add error handler

module.exports = app;
