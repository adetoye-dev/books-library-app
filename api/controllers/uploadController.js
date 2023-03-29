const asyncHandler = require("express-async-handler");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

//Upload book
const uploadBook = asyncHandler(async (req, res) => {
  try {
    const data = await axios
      .post(
        "https://www.filestackapi.com/api/store/S3?key=" +
          process.env.FILESTACK_API_KEY,
        req.files.book.data,
        {
          headers: {
            "Content-Type": "application/pdf",
          },
        }
      )
      .then((res) => res.data);
    console.log(data);
    res.status(200).json(data.url);
  } catch (err) {
    res.json(err);
  }
});

//Upload book cover
const uploadCover = asyncHandler(async (req, res) => {
  console.log(req.files.cover);
  try {
    const data = await axios
      .post(
        "https://www.filestackapi.com/api/store/S3?key=" +
          process.env.FILESTACK_API_KEY,
        req.files.cover.data,
        {
          headers: {
            "Content-Type": "image/png",
          },
        }
      )
      .then((res) => res.data);
    console.log(data);
    res.status(200).json(data.url);
  } catch (err) {
    res.json(err);
  }
});

module.exports = {
  uploadBook,
  uploadCover,
};
