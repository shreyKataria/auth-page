const UserModel = require("../model/user-model");
const ErrorResponse = require("../utils/errorResponse");

const bcrypt = require("bcryptjs");

exports.SignUp = async (req, res, next) => {
  const { email, username, password } = req.body;
  try {
    const user = await UserModel.create({
      email,
      username,
      password,
    });

    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide email and password", 400));
  }

  try {
    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse(" Invalid credentials", 401));
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return next(new ErrorResponse("wrong password", 401));
    }
    sendToken(user, 201, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
