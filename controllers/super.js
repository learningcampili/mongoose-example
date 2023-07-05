const School = require("../models/School");
const User = require("../models/User");
const CustomError = require("../models/customError");

const createAdmin = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email: email });
    if (exists) {
      throw new CustomError("email is already in use", 400);
    }

    const user = new User({
      name,
      email,
      password,
      role: "ADMIN",
    });

    const userSaved = await user.save();
    res.status(201).json(userSaved);
  } catch (error) {
    next(error);
  }
};

const createSchool = async (req, res, next) => {
  try {
    const { name, email, administrator } = req.body;
    const school = new School({ name, email, administrator });
    const savedSchool = await school.save();
    res.status(201).json(savedSchool);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAdmin,
  createSchool,
};
