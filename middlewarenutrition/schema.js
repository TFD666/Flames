const mongoose = require('mongoose');

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

const FoodImage = mongoose.model('FoodImage', foodImageSchema);

module.exports = FoodImage;
