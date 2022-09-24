const mongoose = require('mongoose')

const WorkoutSchema = new mongoose.Schema({
    exercise: {
      type: String,
      required: false
    },
    attempts: {
      type: String,
      required: false
    },
    status: {
      type: String,
      required: false
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      //!Change: this field should be required because the app will break if the user is not present.
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  })

module.exports = mongoose.model('Workout', WorkoutSchema)