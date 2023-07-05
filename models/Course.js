const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
    location: {
      type: String,
      require: true,
    },
    days: [{ day: String, start: Date, end: Date }],
    price: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

courseSchema.virtual("id").get(function () {
  return this._id;
});

courseSchema.set("toJSON"), { virtuals: true };

module.exports = model("Course", courseSchema);
