const { checkAuth } = require("./checkAuth");
const { checkRoleAuth } = require("./checkRoleAuth");
const errorHandler = require("./errorHandler");

module.exports = {
  checkAuth,
  checkRoleAuth,
  errorHandler,
};
