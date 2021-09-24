const service = require("./articles.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

function hasData(req, res, next) {
  const methodName = "hasData";
  req.log.debug({ __filename, methodName, body: req.body });
  if (req.body.data) {
    req.log.trace({ __filename, methodName, valid: true });
    return next();
  }
  const message = "body must have data property";
  next({ status: 400, message: message });
  req.log.trace({ __filename, methodName, valid: false }, message);
}

function dataHas(propertyName) {
  const methodName = `dataHas('${propertyName}')`;
  return (req, res, next) => {
    req.log.debug({ __filename, methodName, body: req.body });
    const { data = {} } = req.body;
    const value = data[propertyName];
    if (value) {
      req.log.trace({ __filename, methodName, valid: true });
      return next();
    }
    const message = `Article must include a ${propertyName}`;
    next({ status: 400, message: message });
    req.log.trace({ __filename, methodName, valid: false }, message);
  };
}

const hasTitle = dataHas("title");
const hasUrl = dataHas("url");
const hasSummary = dataHas("summary");

async function create(req, res) {
  const methodName = "list";
  req.log.debug({ __filename, methodName });
  const data = await service.create(req.body.data);
  res.status(201).json({
    data,
  });
  req.log.trace({ __filename, methodName, return: true, data });
}

async function list(req, res) {
  const methodName = "list";
  req.log.debug({ __filename, methodName });
  const data = await service.list();
  res.json({
    data,
  });
  req.log.trace({ __filename, methodName, return: true, data });
}

module.exports = {
  create: [hasData, hasTitle, hasUrl, hasSummary, asyncErrorBoundary(create)],
  list: asyncErrorBoundary(list),
};
