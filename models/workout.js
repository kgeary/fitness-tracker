const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExerciseSchema = require("./exercise.js");

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [ExerciseSchema],
});

WorkoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((a, c) => { a += c.duration; }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;