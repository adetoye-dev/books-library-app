const { timeStamp } = require("console");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  bookUrl: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  featured: {},
});

module.exports = mongoose.model("Book", bookSchema);
