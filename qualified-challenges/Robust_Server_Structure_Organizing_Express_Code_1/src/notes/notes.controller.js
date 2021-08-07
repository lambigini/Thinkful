const path = require("path");
const notes = require(path.resolve("src/data/notes-data"));

const hasText = (req, res, next) => {
  const { data: { text } = {} } = req.body;
  if (text) {
    return next();
  }
  return next({ status: 400, message: "A 'text' property is required." });
};

function create(req, res, next) {
  const { data: { text } = {} } = req.body;

  const newNote = {
    id: notes.length + 1, // Assign the next ID
    text,
  };
  notes.push(newNote);
  res.status(201).json({ data: newNote });
}

const noteExists = (req, res, next) => {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  if (foundNote) {
    return next();
  } else {
    return next({
      status: 404,
      message: `Note id not found: ${req.params.noteId}`,
    });
  }
};

function read(req, res, next) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  res.json({ data: foundNote });
}

function update(req, res, next) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);

  const originalText = foundNote.text;
  const { data: { text } = {} } = req.body;

  if (originalText != text) {
    // update text
    foundNote.text = text;
  }
  res.json({ data: foundNote });
}

function destroy(req, res, next) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);

  const index = notes.findIndex((note) => note.id === Number(noteId));
  const deletedNote = notes.splice(index, 1);

  console.log("deletedNote", deletedNote);

  res.sendStatus(204);
}

function list(req, res, next) {
  res.json({ data: notes });
}

module.exports = {
  create: [hasText, create],
  read: [noteExists, read],
  update: [noteExists, hasText, update],
  delete: [noteExists, destroy],
  list,
};
