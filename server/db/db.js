const mongoose = require("mongoose");
// const dotenv = require("dotenv").config("./config.env");
const DB_URL = `mongodb+srv://shreykataria185:${process.env.DB_PASSWORD}@cluster0.ujmroch.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
