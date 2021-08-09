const ratings = require("../data/ratings-data");

function ratingExists(req, res, next) {
  const { ratingId } = req.params;

  const foundRating = ratings.find((rating) => rating.id === Number(ratingId));

  if (foundRating === undefined) {
    return next({
      status: 404,
      message: `rating id not found ${ratingId}`,
    });
  }

  res.locals.rating = foundRating;
  next();
}

function read(req, res, next) {
  res.json({
    data: res.locals.rating,
  });
}

function list(req, res) {
  const { noteId } = req.params;

  const byResult = noteId
    ? (rate) => rate.noteId === Number(noteId)
    : () => true;

  console.log("ratings.filter(byResult)", ratings.filter(byResult));
  res.json({ data: ratings.filter(byResult) });
}

module.exports = {
  list,
  read: [ratingExists, read],
};
