const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Get profile
router.get('/:email', async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.params.email });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update profile
router.put('/:email', async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      { new: true }
    );
    res.json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
