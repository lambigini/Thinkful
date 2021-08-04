const express = require("express");
const app = express();

const notes = require("./data/notes-data");

app.use(express.json());

app.get("/notes/:noteId", (req, res, next) => {
  const noteId = Number(req.params.noteId);

  const foundNote = notes.find((note) => note.id === noteId);
  if (foundNote) res.json({ data: foundNote });
  // else next(`Note id not found: ${req.params.noteId}`);
  else res.status(400).send(`Note id not found: ${req.params.noteId}`);
  // else res.send(`Note id not found: ${req.params.noteId}`);
});

app.get("/notes", (req, res) => {
  res.json({ data: notes });
});

// TODO: Add ability to create a new note
let lastId = notes.reduce((maxId, note) => Math.max(maxId, note.id), 0);
// console.log("lastId", lastId);
app.post("/notes", (req, res, next) => {
  const { data: { text } = {} } = req.body;

  if (text) {
    const newText = {
      id: ++lastId,
      text,
    };

    notes.push(newText);

    res.status(201).json({ data: newText });
  } else {
    res.sendStatus(400);
  }
});

// TODO: add not found handler
app.use((req, res, next) => {
  next(`Not found: ${req.originalUrl}`);
});
// TODO: Add error handler
app.use((err, req, res, next) => {
  res.status(400).send(err);
});
module.exports = app;
