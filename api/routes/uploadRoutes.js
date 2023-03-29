const express = require("express");
const router = express.Router();

const { uploadBook, uploadCover } = require("../controllers/uploadController");

router.post("/book", uploadBook);
router.post("/cover", uploadCover);

module.exports = router;
