const { check } = require("express-validator");
const { handleValidator } = require("../utils/handleValidator");
//Allways base on the Model

const validateSchoolCreate = [
  check("name", "The name is required").exists().notEmpty(),
  check("email", "The email is required")
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage("Please enter a valid email"),
  check("administrator").exists().isMongoId().withMessage("algo esta mal"),
  (req, res, next) => {
    handleValidator(req, res, next);
  },
];

const validateSchoolUpdate = [
  check("name", "The name is required").optional().trim().notEmpty(),
  check("email", "The email is required")
    .optional()
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage("Please enter a valid email"),
  (req, res, next) => {
    handleValidator(req, res, next);
  },
];

const validateId = [
  check("id").exists().isMongoId().withMessage("Enter a vaild Id"),
  (req, res, next) => {
    handleValidator(req, res, next);
  },
];

module.exports = { validateId, validateSchoolCreate, validateSchoolUpdate };
