const { Schema } = require("mongoose");
const User = require("./User");

const teacherSchema = new Schema(
  {
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = User.discriminator("Teacher", teacherSchema);
