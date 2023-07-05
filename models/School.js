const { Schema, model } = require("mongoose");

const schoolSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    administrator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Other school properties
  },
  {
    timestamps: true,
    versionKey: false,
  }
);



schoolSchema.methods.toJSON = function () {
  const { _id, ...school } = this.toObject();
  console.log(school.administrator._id);
  school.id = this._id;

  return school;
};

module.exports = model("School", schoolSchema);
