const { Router } = require("express");

const { createAdmin, createSchool } = require("../controllers/super");
const { checkAuth } = require("../middlewares/checkAuth");
const { checkRoleAuth } = require("../middlewares/checkRoleAuth");

// const {} = require('../validators/super');

const router = Router();

router.post("/admin", checkAuth, checkRoleAuth(["SUPER"]), createAdmin);

router.post("/school", checkAuth, checkRoleAuth(["SUPER"]), createSchool);

module.exports = router;
