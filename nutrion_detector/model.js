const mongoose = require('mongoose');

// Define the schema for the FoodImage model
const foodImageSchema = new mongoose.Schema({
  image: {
    type: Buffer,
    required: true
  },
  nutritionInfo: {
    calories: Number,
    protein: Number,
    fat: Number,
    carbohydrates: Number
  }
});

// Create the FoodImage model
const FoodImage = mongoose.model('FoodImage', foodImageSchema);

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/nutrition-detector');

// Export the FoodImage model
module.exports = FoodImage;