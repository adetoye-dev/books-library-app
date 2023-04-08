const express = require("express");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/middleware");
const app = express();
const colors = require("colors");
const connectDB = require("./config/db");
const fileUpload = require("express-fileupload");
const cors = require("cors");

dotenv.config();
connectDB();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: false }));

app.use("/api/books", require("./routes/booksRoutes.js"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
