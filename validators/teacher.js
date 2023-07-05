const { check } = require("express-validator");
const { handleValidator } = require("../utils/handleValidator");
//Allways base on the Model

const validateTeacherCreate = [
  check("name", "The name is required").exists().notEmpty(),
  check("email", "The email is required")
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage("Please enter a valid email"),
  check("password", "The password is required").exists().trim().notEmpty(),
  (req, res, next) => {
    handleValidator(req, res, next);
  },
];

const validateTeacherUpdate = [
  check("name", "The name is required").optional().trim().notEmpty(),
  check("email", "The email is required")
    .optional()
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage("Please enter a valid email"),
  check("password", "The password is required").optional().trim().notEmpty(),
  (req, res, next) => {
    handleValidator(req, res, next);
  },
];

module.exports = { validateTeacherCreate, validateTeacherUpdate };
