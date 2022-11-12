const router = require("express").Router();
const { categories, books, reviews } = require("./mock");
const { reply, getById } = require("./utils");

router.get("/categories", (req, res, next) => {
  reply(res, categories);
});

router.get("/books", (req, res, next) => {
  const { cinemaId, filmId } = req.query;
  let result = books;

  if (cinemaId) {
    const cinema = getById(categories)(cinemaId);
    if (cinema) {
      result = cinema.books.map(getById(result));
    }
  }

  if (!cinemaId && filmId) {
    result = getById(result)(filmId);
  }
  reply(res, result);
});

router.get("/reviews", (req, res, next) => {
  const { id } = req.query;
  let result = reviews;
  if (id) {
    const cinema = getById(categories)(id);
    if (cinema) {
      result = cinema.reviews.map(getById(result));
    }
  }
  reply(res, result);
});

module.exports = router;
