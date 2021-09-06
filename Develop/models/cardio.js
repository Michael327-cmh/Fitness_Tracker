const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Resistance or Cardio"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for Work-Out"
  },
  duration: {
    type: String,
    trim: true,
    required: "Enter a name for Work-Out"
  },
  weight: {
    type: String,
    trim: true,
    required: "Enter a name for Work-Out"
  },
  reps: {
    type: String,
    trim: true,
    required: "Enter a name for Work-Out"
  },
  sets: {
    type: String,
    trim: true,
    required: "Enter a name for Work-Out"
  }
  });

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;