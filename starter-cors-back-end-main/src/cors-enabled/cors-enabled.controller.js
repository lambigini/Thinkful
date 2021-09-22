const nextId = require("../utils/nextId");

const corsElements = [
  {
    id: "07e05d3fa75f44c0b3ee06530c01629e",
    message: "CORS enabled data",
  },
  {
    id: "55b5a6f60ddc4b3cba36e2a1ec5c6990",
    message: "More CORS enabled data",
  },
];

function hasData(req, res, next) {
  console.debug(req.body);
  const { data } = req.body;
  if (data) {
    return next();
  }
  next({ status: 400, message: `Request must include data` });
}

function create(req, res) {
  const newElement = req.body.data;
  newElement.id = nextId();
  corsElements.push(newElement);
  res.status(201).json({ data: newElement });
}

function destroy(req, res) {
  const { corsID } = req.params;
  const index = corsElements.findIndex((element) => element.id === corsID);
  if (index > -1) {
    corsElements.splice(index, 1);
  }
  res.sendStatus(204);
}

function list(req, res) {
  res.json({ data: corsElements });
}

function elementIdExists(req, res, next) {
  const { corsId } = req.params;
  const foundElement = corsElements.find((element) => element.id === corsId);
  if (foundElement) {
    res.locals.element = foundElement;
    return next();
  }
  next({
    status: 404,
    message: `id not found: ${req.params.corsId}`,
  });
}

function read(req, res) {
  res.json({ data: res.locals.element });
}

function update(request, response) {
  const { id } = response.locals.element;
  Object.assign(response.locals.element, request.body.data, { id });
  response.json({ data: response.locals.element });
}

module.exports = {
  create: [hasData, create],
  list,
  read: [elementIdExists, read],
  update: [elementIdExists, hasData, update],
  delete: [elementIdExists, destroy],
};
