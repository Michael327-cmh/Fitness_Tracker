const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  day: {
    type: Date,
    required: "Enter exercise date",
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Please choose an exercise"
      },
    name: {
      type: String,
      required: "Please enter the name of the exercise"
    },
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]
});

const exercise = mongoose.model("exercise", exerciseSchema);

module.exports = exercise;