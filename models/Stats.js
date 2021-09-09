var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  duration: { type: String, required: true },
  weight: { type: String, required: true },
  reps: { type: String, required: true },
  set: { type: String, required: true }
});

var workout = mongoose.model("workout", workoutSchema);

module.exports = workout;