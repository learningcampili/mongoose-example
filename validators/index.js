const { validateId } = require("./general");

const { validateLogin, validateRegister } = require("./auth");

module.exports = {
  validateId,

  validateLogin,
  validateRegister,
};
