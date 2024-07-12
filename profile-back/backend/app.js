const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const profileRoutes = require('./routes/profile');
const Profile = require('./models/Profile');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/profile', profileRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/profiledb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');

  // Check if there are any profiles, and if not, create a sample profile
  const profileCount = await Profile.countDocuments();
  if (profileCount === 0) {
    const sampleProfile = new Profile({
      joinedDate: new Date(),
      gender: 'Male',
      birthdate: new Date('1990-01-01'),
      password: 'password123',
      email: 'david@yahoo.com',
      mobile: '1234567890',
    });

    await sampleProfile.save();
    console.log('Sample profile created');
  }
});

module.exports = app;
