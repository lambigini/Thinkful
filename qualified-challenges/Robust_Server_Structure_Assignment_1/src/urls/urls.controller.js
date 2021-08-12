const urls = require("../data/urls-data");

console.log("urls ", urls);

const uses = require("../data/uses-data");
const { use } = require("../uses/uses.router");

let lastUrlId = urls.reduce((maxId, url) => Math.max(maxId, url.id), 0);

console.log("lastUrlId ", lastUrlId);

function bodyHasHrefProperty(req, res, next) {
  const { data: { href } = {} } = req.body;
  console.log("href ", href);
  if (href) return next();

  next({
    status: 400,
    message: "href property is required.",
  });
}

function create(req, res, next) {
  const { data: { href } = {} } = req.body;

  console.log("href ", href);

  const newUrl = {
    id: ++lastUrlId,
    href,
  };

  urls.push(newUrl);

  res.status(201).json({ data: newUrl });
}

function list(req, res) {
  console.log("urls ", urls);

  res.status(200).json({ data: urls });
}

// function list(req, res) {
//   const { useId } = req.params;
//   const byResult = useId ? (url) => url.id === useId : () => true;
//   console.log(urls.filter(byResult));
//   res.json({ data: urls.filter(byResult) });
// }

function urlIdExist(req, res, next) {
  const { urlId } = req.params;

  console.log("urlId exist", urlId);

  const urlObject = urls.find((url) => url.id === Number(urlId));

  if (urlObject) {
    res.locals.urlObject = urlObject;

    return next();
  }

  next({
    status: 404,
    message: `url id not found: ${urlId} `,
  });
}

function read(req, res, next) {
  const { urlId } = req.params;

  const urlObject = urls.find((url) => url.id === Number(urlId));

  const newUsesId = uses.length + 1;

  const newUseUrlId = Number(urlId);

  const newUseRecord = {
    id: newUsesId,
    urlId: newUseUrlId,
    time: Date.now(),
  };

  uses.push(newUseRecord);

  res.json({ data: urlObject });
}

function update(req, res, next) {
  const urlObject = res.locals.urlObject;

  const originalResult = urlObject.href;

  const { data: { href } = {} } = req.body;

  if (originalResult !== href) {
    urlObject.href = href;
  }

  res.json({ data: urlObject });
}

module.exports = {
  create: [bodyHasHrefProperty, create],
  read: [urlIdExist, read],
  list,
  update: [urlIdExist, update],
  urlIdExist,
};
