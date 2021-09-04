const restaurantsService = require("./restaurants.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");

const hasRequiredProperties = hasProperties(
  "restaurant_name",
  "cuisine",
  "address"
);

async function restaurantExists(req, res, next) {
  const { restaurantId } = req.params;

  const restaurant = await restaurantsService.read(restaurantId);

  if (restaurant) {
    res.locals.restaurant = restaurant;
    return next();
  }
  next({ status: 404, message: `Restaurant cannot be found.` });
}

async function list(req, res, next) {
  const data = await restaurantsService.list();
  res.json({ data });
}

// async function create(req, res, next) {
//   // your solution here
//   res.json({ data: {} });
// }

const VALID_PROPERTIES = ["restaurant_name", "cuisine", "address"];

function hasOnlyValidProperties(req, res, next) {
  const { data = {} } = req.body;

  const invalidFields = Object.keys(data).filter(
    (field) => !VALID_PROPERTIES.includes(field)
  );

  // console.log("invalidFields ", invalidFields);

  if (invalidFields.length) {
    return next({
      status: 400,
      message: `Invalid field(s): ${invalidFields.join(", ")}`,
    });
  }

  next();
}

function create(req, res, next) {
  restaurantsService
    .create(req.body.data)
    .then((data) => res.status(201).json({ data }))
    .catch(next);
}

async function update(req, res, next) {
  const updatedRestaurant = {
    ...res.locals.restaurant,
    ...req.body.data,
    restaurant_id: res.locals.restaurant.restaurant_id,
  };

  const data = await restaurantsService.update(updatedRestaurant);

  res.json({ data });
}

// async function destroy(req, res, next) {
//   // your solution here
//   res.json({ data: {} });
// }

function destroy(req, res, next) {
  restaurantsService
    .delete(res.locals.restaurant.restaurant_id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: [hasOnlyValidProperties, hasRequiredProperties, create],
  update: [asyncErrorBoundary(restaurantExists), asyncErrorBoundary(update)],
  delete: [restaurantExists, destroy],
};
