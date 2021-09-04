// function read(req, res, next) {
//   res.json({ data: { product_title: "some product title" } });
// }

// function list(req, res, next) {
//   res.json({
//     data: [{ product_title: "product 1" }, { product_title: "product 2" }],
//   });
// }
const productsService = require("./products.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  const data = await productsService.list();
  res.json({ data });
}

// const productsService = require("./products.service");

// function list(req, res, next) {
//   productsService
//     .list()
//     .then((data) => res.json({ data }))
//     .catch(next);
// }

// function productExists(req, res, next) {
//   productsService
//     .read(req.params.productId)
//     .then((product) => {
//       if (product) {
//         res.locals.product = product;
//         return next();
//       }
//       next({ status: 404, message: `Product cannot be found.` });
//     })
//     .catch(next);
// }

async function productExists(req, res, next) {
  const product = await productsService.read(req.params.productId);

  if (product) {
    res.locals.product = product;
    return next();
  }
  next({ status: 404, message: `Product cannot be found.` });
}

function read(req, res) {
  const { product: data } = res.locals;
  res.json({ data });
}

module.exports = {
  read: [asyncErrorBoundary(productExists), read],
  list: asyncErrorBoundary(list),
};
