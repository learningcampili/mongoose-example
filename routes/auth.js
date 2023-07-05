const { Router } = require("express");

const { login, register } = require("../controllers/auth");

const { validateLogin, validateRegister } = require("../validators/auth");
const { checkAuth } = require("../middlewares/checkAuth");
const { checkRoleAuth } = require("../middlewares/checkRoleAuth");

const router = Router();

router.post("/login", validateLogin, login);
router.post("/register", validateRegister, register);
router.post(
  "/register/admin",
  validateRegister,
  checkAuth,
  checkRoleAuth(["SUPER"]),
  register
);

module.exports = router;
