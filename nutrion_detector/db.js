const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nutrition-detector');

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;