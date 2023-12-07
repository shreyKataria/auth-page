const express = require("express");
const { getPrivateRoute } = require("../controller/private-controller");
const { protect } = require("../middleware/auth");

const privateRouter = express.Router();

privateRouter.get("/", protect, getPrivateRoute);

module.exports = privateRouter;
