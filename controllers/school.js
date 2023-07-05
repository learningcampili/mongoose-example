const School = require("../models/School");
const CustomError = require("../models/customError");

const createSchool = async (req, res, next) => {
  try {
    const { name, email, administrator } = req.body;
    const school = new School({ name, email, administrator });
    const savedSchool = await school.save();
    res.status(201).json(savedSchool);
  } catch (error) {
    next(error);
  }
};

const getSchools = async (req, res, next) => {
  try {
    const schools = await School.find().populate({
      path: "administrator",
      select: "name email id",
    });
    res.status(200).json(schools);
  } catch (error) {
    next(error);
  }
};

const getSchool = async (req, res, next) => {
  try {
    const { id } = req.params;
    const school = await School.findById(id).populate("administrator");
    if (!school) {
      throw new CustomError("School Not found", 404);
    }
    res.status(200).json(school);
  } catch (error) {
    next(error);
  }
};

const updateSchool = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, administrator } = req.body;
    const updatedSchool = await School.findByIdAndUpdate(
      id,
      { name, email, administrator },
      { new: true }
    );
    if (!updateSchool) {
      throw new CustomError("School not found", 404);
    }
    res.json({ message: "School updated successfully", school: updatedSchool });
  } catch (error) {
    next(error);
  }
};

const activateSchool = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedSchool = await School.findOneAndUpdate(
      { _id: id, isActive: false },
      { isActive: true },
      { new: true }
    );
    if (!updateSchool) {
      throw new CustomError("School not found", 404);
    }
    res.json({ message: "School updated successfully", school: updatedSchool });
  } catch (error) {
    next(error);
  }
};

const deleteSchool = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedSchool = await School.findOneAndUpdate(
      { _id: id, isActive: true },
      {
        isActive: false,
      },
      { new: true }
    );
    if (!deletedSchool) {
      throw new CustomError("School not Found", 404);
    }
    res
      .status(200)
      .json({ message: "School deleted successfully", school: deletedSchool });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSchool,
  getSchools,
  getSchool,
  updateSchool,
  deleteSchool,
  activateSchool,
};
