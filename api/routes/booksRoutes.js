const express = require("express");
const router = express.Router();

const {
  getBooks,
  setBook,
  putBook,
  deleteBook,
} = require("../controllers/booksController");

router.route("/").get(getBooks).post(setBook);
router.route("/:id").put(putBook).delete(deleteBook);

module.exports = router;
