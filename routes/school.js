const { Router } = require("express");

const {
  createSchool,
  getSchools,
  getSchool,
  updateSchool,
  deleteSchool,
  activateSchool,
} = require("../controllers/school");

const { checkAuth, checkRoleAuth } = require("../middlewares/index");

const {
  validateSchoolCreate,
  validateSchoolUpdate,
} = require("../validators/school");

const { validateId } = require("../validators/general");

const router = Router();

router.post(
  "/",
  checkAuth,
  checkRoleAuth(["SUPER"]),
  validateSchoolCreate,
  createSchool
);
router.get("/", checkAuth, checkRoleAuth(["SUPER"]), getSchools);
router.get("/:id", validateId, checkAuth, checkRoleAuth(["SUPER"]), getSchool);
router.put(
  "/:id",
  validateId,
  checkAuth,
  checkRoleAuth(["SUPER"]),
  validateSchoolUpdate,
  updateSchool
);
router.delete(
  "/:id",
  validateId,
  checkAuth,
  checkRoleAuth(["SUPER"]),
  deleteSchool
);
router.put(
  "/:id/activate",
  validateId,
  checkAuth,
  checkRoleAuth(["SUPER"]),
  activateSchool
);

module.exports = router;
