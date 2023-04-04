const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {

  {/*if (mongoose.connections[0]) {
    return;
  }*/}
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

{
  /*const handler = async (req, res) => {
  await connectDB();
  
  if (req.method === "GET") {
    getBooks(req, res);
  }}*/
}

module.exports = connectDB;
