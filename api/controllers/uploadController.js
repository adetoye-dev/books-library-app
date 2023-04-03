const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

//Upload book
const uploadBook = async (bookData) => {
  try {
    const data = await axios
      .post(
        "https://www.filestackapi.com/api/store/S3?key=" +
          process.env.FILESTACK_API_KEY,
        bookData,
        {
          headers: {
            "Content-Type": "application/pdf",
          },
        }
      )
      .then((res) => res.data);
    console.log(data);
    return data.url;
  } catch (err) {
    res.json(err);
  }
};

//Upload book cover
const uploadCover = async (imgData) => {
  console.log(imgData);
  try {
    const data = await axios
      .post(
        "https://www.filestackapi.com/api/store/S3?key=" +
          process.env.FILESTACK_API_KEY,
        imgData,
        {
          headers: {
            "Content-Type": "image/png",
          },
        }
      )
      .then((res) => res.data);
    console.log(data);
    return data.url;
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  uploadBook,
  uploadCover,
};
