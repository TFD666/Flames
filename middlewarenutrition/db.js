const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://guptatulsi19:tulsi123@backend.ux8lwqf.mongodb.net/');

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
