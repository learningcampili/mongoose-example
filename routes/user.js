const { Router } = require("express");

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const { checkAuth } = require("../middlewares/checkAuth");
const { checkRoleAuth } = require("../middlewares/checkRoleAuth");

const { validateId } = require("../validators/index");

const router = Router();

router.get("/", checkAuth, checkRoleAuth(["ADMIN", "SUPER"]), getUsers);
router.get(
  "/:id",
  checkAuth,
  checkRoleAuth(["ADMIN", "SUPER"]),
  validateId,
  getUser
);
router.delete(
  "/:id",
  checkAuth,
  checkRoleAuth(["ADMIN", "SUPER"]),
  validateId,
  deleteUser
);

module.exports = router;
