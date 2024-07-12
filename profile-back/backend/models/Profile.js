const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  joinedDate: { type: Date, required: true },
  gender: { type: String, required: true },
  birthdate: { type: Date, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
});

module.exports = mongoose.model('Profile', ProfileSchema);
