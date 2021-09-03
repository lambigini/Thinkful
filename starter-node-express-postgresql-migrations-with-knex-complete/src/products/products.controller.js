// function read(req, res, next) {
//   res.json({ data: { product_title: "some product title" } });
// }

// function list(req, res, next) {
//   res.json({
//     data: [{ product_title: "product 1" }, { product_title: "product 2" }],
//   });
// }

const productsService = require("./products.service");

function list(req, res, next) {
  productsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

function productExists(req, res, next) {
  productsService
    .read(req.params.productId)
    .then((product) => {
      if (product) {
        res.locals.product = product;
        return next();
      }
      next({ status: 404, message: `Product cannot be found.` });
    })
    .catch(next);
}

function read(req, res) {
  const { product: data } = res.locals;
  res.json({ data });
}

module.exports = {
  read: [productExists, read],
  list: [list],
};
