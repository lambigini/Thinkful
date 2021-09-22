const nextId = require("../utils/nextId");

const noCorsElements = [
  {
    id: "5b1e030087644e81b36a7447a112498c",
    message: "CORS NOT enabled data",
  },
];

function hasData(req, res, next) {
  const { data } = req.body;
  if (data) {
    return next();
  }
  next({ status: 400, message: `Request must include data` });
}

function create(req, res) {
  const newElement = req.body.data;
  newElement.id = nextId();
  noCorsElements.push(newElement);
  res.status(201).json({ data: newElement });
}

function destroy(req, res) {
  const { noCorsId } = req.params;
  const index = noCorsElements.findIndex((element) => element.id === noCorsId);
  if (index > -1) {
    noCorsElements.splice(index, 1);
  }
  res.sendStatus(204);
}

function list(req, res) {
  res.json({ data: noCorsElements });
}

function elementIdExists(req, res, next) {
  const { noCorsId } = req.params;
  const foundElement = noCorsElements.find(
    (element) => element.id === noCorsId
  );
  if (foundElement) {
    res.locals.element = foundElement;
    return next();
  }
  next({
    status: 404,
    message: `id not found: ${req.params.noCorsId}`,
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
