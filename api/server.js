const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const {errorHandler} = require("./middleware/middleware")
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/books", require("./routes/booksRoutes"));

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));
