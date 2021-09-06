const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for Work-Out"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const WorkingOut = mongoose.model("Work-Out", workoutSchema);

module.exports = WorkingOut;