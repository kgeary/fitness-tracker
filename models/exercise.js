const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    enum: ["cardio", "resistance"],
    required: "You must select an Exercise Type",
  },
  duration: {
    type: Number,
    required: "You must specify a duration",
    min: 1,
  },
  name: {
    type: String,
    trim: true,
    minlength: 1,
    required: "You must specify a Name",
  },
  weight: {
    type: Number,
    min: 0,
  },
  reps: {
    type: Number,
    min: 0,
  },
  sets: {
    type: Number,
    min: 0,
  },
  distance: {
    type: Number,
    min: 0
  }
});

module.exports = ExerciseSchema;