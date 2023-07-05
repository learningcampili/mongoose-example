const Teacher = require("../models/Teacher");

const CustomError = require("../models/customError");

const jwt = require("jsonwebtoken");

const createTeacher = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const exists = await Teacher.findOne({ email: email });
    if (exists) {
      throw new CustomError("email is already in use", 400);
    }

    const user = new Teacher({
      name,
      email,
      password,
      role: "TEACHER",
    });

    const userSaved = await user.save();
    res.status(201).json(userSaved);
  } catch (error) {
    next(error);
  }
};

const getTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find({ role: "TEACHER" });
    res.status(200).json(teachers);
  } catch (error) {
    next(Error);
  }
};

module.exports = {
  createTeacher,
  getTeachers,
};
