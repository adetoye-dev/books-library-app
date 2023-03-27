const mongoose = require("mongoose");
const connectDB = async () => {
  //there is a bug to fix here
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://Book-library:e6yI4h87bD5jotbK@remicluster.kyndevf.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
