const { Router } = require("express");

const { createTeacher, getTeachers } = require("../controllers/teacher");

const {
  validateTeacherCreate,
  validateTeacherUpdate,
} = require("../validators/teacher");

const { validateId } = require("../validators/general");
const router = Router();

router.post("/", validateTeacherCreate, createTeacher);
router.get("/", getTeachers);
// router.get("/:id", validateId, getTeacher);
// router.put("/:id", validateId, validateTeacherUpdate, updateTeacher);
// router.delete("/:id", validateId, deleteTeacher);

module.exports = router;
