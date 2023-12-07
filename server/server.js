const dotenv = require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./db/db");
const errorHandler = require("./middleware/error");
const Router = require("./routes/user-routes");
const privateRouter = require("./routes/private");

// middlewares
const app = express();
app.use(express.json());

// db
connectDB();

// routes
app.use("/user", Router);
app.use("/private", privateRouter);

// error handler
app.use(errorHandler);

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(` Server started at port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`logged Error : ${err}`);
  server.close(() => process.exit(1));
});
