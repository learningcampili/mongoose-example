const { Schema, model } = require("mongoose");

const bcrypt = require("bcryptjs");

UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "The password is required"],
    },
    role: {
      type: String,
      enum: ["SUPER", "ADMIN", "TEACHER", "STUDENT"],
      default: "STUDENT",
    },
    isGoogle: {
      type: Boolean,
      default: false,
    },
    picture: {
      type: String,
    },
    confirmToken: {
      type: String,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    forgotToken: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
    next();
  } catch (error) {
    console.error(error);
    throw new Error("Error hashing password");
  }
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

UserSchema.methods.toJSON = function () {
  const { password, _id, ...user } = this.toObject();
  user.id = this._id;
  return user;
};

module.exports = model("User", UserSchema);
