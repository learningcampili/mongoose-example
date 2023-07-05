// const error = {
//   keyValue: { email: "pepe" },
//   keyPattern: { email: 1 },
// };

// console.log(Object.values(error.keyValue)[0]);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Base schema
const baseSchema = new Schema({
  name: String,
  age: Number,
});

// Extended schema
const extendedSchema = new Schema({
  // Additional fields
  email: String,
  address: String,
});

// Combine the schemas
// const combinedSchema = new Schema(
//   Object.assign({}, baseSchema.obj, extendedSchema.obj)
// );
const combinedSchema = new Schema({ ...baseSchema.obj, ...extendedSchema.obj });

console.log(combinedSchema);

// Create the model
const User = mongoose.model("User", combinedSchema);

// const mongoose = require('mongoose');
// const User = require('./User');

// const studentSchema = new mongoose.Schema({
//   // Additional student-specific fields can be added here
// });

// const Student = User.discriminator('Student', studentSchema);

// module.exports = Student;
