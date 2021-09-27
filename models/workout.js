const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercise: [{
    type: {
        type: String,
        required: 'Enter exercise type.'
    },
    name: {
        type: String,
        required: 'Enter exercise name.'
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    }
  }],
  duration: {
      type: Number
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;