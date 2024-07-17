const express = require('express');
const router = express.Router();
const FoodImage = require('./schema');
const { upload, authenticateJWT } = require('./middleware');
const jwt = require('jsonwebtoken');

// Dummy user authentication for demonstration
router.post('/login', (req, res) => {
  // In a real application, you would authenticate the user using a database
  const user = { id: 1, username: 'user' };
  
  const token = jwt.sign(user, 'your_jwt_secret_key', { expiresIn: '1h' });
  
  // Set JWT token in cookies
  res.cookie('token', token, { httpOnly: true });
  res.send({ message: 'Logged in successfully' });
});

router.post('/logout', (req, res) => {
  // Clear the token cookie
  res.clearCookie('token');
  res.send({ message: 'Logged out successfully' });
});

// Analyze the image using a nutrition detection API (e.g., Google Cloud Vision API)
async function analyzeImage(imageBuffer) {
  // This function should call the external API to analyze the image and return the nutrition information
  // For now, we'll just return dummy data
  return {
    calories: 200,
    protein: 10,
    fat: 15,
    carbohydrates: 30
  };
}

// Route to handle image uploads
router.post('/upload', authenticateJWT, upload.single('image'), async (req, res) => {
  try {
    // Create a new FoodImage document
    const foodImage = new FoodImage({
      image: req.file.buffer
    });

    // Save the FoodImage document to the database
    await foodImage.save();

    // Analyze the image using a nutrition detection API
    const nutritionInfo = await analyzeImage(foodImage.image);

    // Update the FoodImage document with the nutrition information
    foodImage.nutritionInfo = nutritionInfo;
    await foodImage.save();

    // Return a success response
    res.status(201).send({ message: 'Image uploaded successfully', id: foodImage._id });
  } catch (err) {
    // Return an error response
    res.status(500).send({ message: 'Error uploading image', error: err.message });
  }
});

// Route to retrieve nutrition information for an image
router.get('/nutrition-info/:id', authenticateJWT, async (req, res) => {
  try {
    // Find the FoodImage document by ID
    const foodImage = await FoodImage.findById(req.params.id);

    if (!foodImage) {
      return res.status(404).send({ message: 'Image not found' });
    }

    // Return the nutrition information
    res.send(foodImage.nutritionInfo);
  } catch (err) {
    // Return an error response
    res.status(500).send({ message: 'Error retrieving nutrition information', error: err.message });
  }
});

// Route to delete an image
router.delete('/delete/:id', authenticateJWT, async (req, res) => {
  try {
    const foodImage = await FoodImage.findByIdAndDelete(req.params.id);

    if (!foodImage) {
      return res.status(404).send({ message: 'Image not found' });
    }

    res.send({ message: 'Image deleted successfully' });
  } catch (err) {
    res.status(500).send({ message: 'Error deleting image', error: err.message });
  }
});

// Route to retrieve all uploaded images
router.get('/images', authenticateJWT, async (req, res) => {
  try {
    const foodImages = await FoodImage.find();

    res.send(foodImages);
  } catch (err) {
    res.status(500).send({ message: 'Error retrieving images', error: err.message });
  }
});

// Route to handle the root URL
router.get('/', (req, res) => {
  res.send('Welcome to the Nutrition Detector API!');
});

module.exports = router;
