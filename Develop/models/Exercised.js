var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  duration: { type: String, required: true },
  weight: { type: String, required: true },
  reps: { type: String, required: true },
  set: { type: String, required: true }
});

var exercise = mongoose.model("exercise", exerciseSchema);

module.exports = exercise;