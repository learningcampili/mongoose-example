const { Schema } = require("mongoose");
const User = require("./User");

const studentSchema = new Schema(
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

module.exports = User.discriminator("Student", studentSchema);
