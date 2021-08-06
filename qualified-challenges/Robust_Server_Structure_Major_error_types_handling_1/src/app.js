const express = require("express");
const app = express();

const path = require("path");
const notes = require(path.resolve("src/data/notes-data"));

app.use(express.json());

function validationError(req, res, next) {
  const { data: { text } = {} } = req.body;
  if (text) return next();
  else {
    return next({
      status: 400,
      message: "text",
    });
  }
}

function validationNote(req, res, next) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);

  if (foundNote) return next();
  else {
    return next({
      status: 404,
      message: "99",
    });
  }
}

app.get("/notes/:noteId", validationNote, (req, res) => {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);

  res.json({ data: foundNote });
});

app.get("/notes", (req, res) => {
  res.json({ data: notes });
});

let lastNoteId = notes.reduce((maxId, note) => Math.max(maxId, note.id), 0);

app.post(
  "/notes",
  validationError,

  (req, res) => {
    const newNote = {
      id: ++lastNoteId, // Increment last id then assign as the current ID
      text,
    };
    notes.push(newNote);
    res.status(201).json({ data: newNote });
  }
);

// Not found handler
app.use((req, res, next) => {
  next({
    status: 404,
    message: `Not found: ${req.originalUrl}`,
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);

  const { status = 500, message = "Something went wrong!" } = error;

  res.status(status).json({ error: message });
});

module.exports = app;
