const asyncHandler = require('express-async-handler')

// @description Get books
// @route GET /api/books
// @access Private
const getBooks = asyncHandler (async (req, res) => {
  res.status(200).json({ message: "Get books" });
})

// @description Set book
// @route POST /api/books
// @access Private
const setBook = asyncHandler (async (req, res) => {
  
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set book" });
})

// @description Update book
// @route  PUT /api/books/:id
// @access Private
const putBook = asyncHandler (async (req, res) => {
  res.status(200).json({ message: `Update books ${req.params.id}` });
})

// @description Delete book
// @route DELETE /api/books/:id
// @access Private
const deleteBook = asyncHandler (async (req, res) => {
  res.status(200).json({ message: `delete book ${req.params.id}` });
})

module.exports = {
  getBooks,
  setBook,
  putBook,
  deleteBook,
};
