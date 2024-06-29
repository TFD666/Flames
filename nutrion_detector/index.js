const express = require('express');
const multer = require('multer');
const app = express();
const FoodImage = require('./db');

// Set up multer to handle image uploads
const upload = multer({ dest: './uploads/' });

// Set up the route to handle image uploads
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Create a new FoodImage document
    const foodImage = new FoodImage({
      image: req.file.buffer
    });

    // Save the FoodImage document to the database
    await foodImage.save();

    // Analyze the image using a nutrition detection API (e.g. Google Cloud Vision API)
    const nutritionInfo = await analyzeImage(foodImage.image);

    // Update the FoodImage document with the nutrition information
    foodImage.nutritionInfo = nutritionInfo;
    await foodImage.save();

    // Return a success response
    res.status(201).send({ message: 'Image uploaded successfully' });
  } catch (err) {
    // Return an error response
    res.status(500).send({ message: 'Error uploading image' });
  }
});

// Set up the route to retrieve nutrition information for an image
app.get('/nutrition-info/:id', async (req, res) => {
  try {
    // Find the FoodImage document by ID
    const foodImage = await FoodImage.findById(req.params.id);

    // Return the nutrition information
    res.send(foodImage.nutritionInfo);
  } catch (err) {
    // Return an error response
    res.status(404).send({ message: 'Image not found' });
  }
});

// Add a route to handle the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Nutrition Detector API!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});