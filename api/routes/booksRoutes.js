const express = require("express");
const router = express.Router();

const {
  getBookById,
  getBooks,
  deleteBook,
  addBook,
  updateBook,
} = require("../controllers/booksController");

router.route("/").get(getBooks).post(addBook);
router.route("/:id").put(updateBook).delete(deleteBook).get(getBookById );

module.exports = router;
