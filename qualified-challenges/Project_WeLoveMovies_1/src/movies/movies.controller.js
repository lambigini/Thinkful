const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  const query_isShowing = req.query.is_showing;

  if (query_isShowing) {
    const data = await moviesService.listMoviesShowing();
    res.json({ data });
  } else {
    const data = await moviesService.list();
    res.json({ data });
  }

  // const data = await moviesService.list();
  // res.json({ data });
}

async function movieExist(req, res, next) {
  const movie = await moviesService.read(req.params.movieId);

  if (movie) {
    res.locals.movie = movie;
    return next();
  }

  next({
    status: 404,
    message: `Movie can not be found`,
  });
}

async function read(req, res, next) {
  const { movie: data } = res.locals;

  res.json({ data });
}

async function listMovieShowAtTheater(req, res, next) {
  const { movieId } = req.params;
  const data = await moviesService.listMovieShowAtTheater(movieId);
  res.json({ data });
}

async function listReviews(req, res, next) {
  const { movieId } = req.params;

  const data = await moviesService.listReviews(movieId);
  console.log(data);
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExist), read],
  listMovieShowAtTheater: [
    asyncErrorBoundary(movieExist),
    asyncErrorBoundary(listMovieShowAtTheater),
  ],
  listReviews: [
    asyncErrorBoundary(movieExist),
    asyncErrorBoundary(listReviews),
  ],
};
