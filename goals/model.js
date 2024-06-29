const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  sets: Number,
  reps: Number,
  weight: Number
});

const dietSchema = new mongoose.Schema({
  name: String,
  description: String,
  calories: Number
});

const daySchema = new mongoose.Schema({
  date: Date,
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
  diet: { type: mongoose.Schema.Types.ObjectId, ref: 'Diet' }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
const Diet = mongoose.model('Diet', dietSchema);
const Day = mongoose.model('Day', daySchema);

module.exports = { Exercise, Diet, Day };