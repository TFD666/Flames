const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const progress = new Schema({
  user: {
    type: String,
  },
  pbar: {
    type: Number,
  },
  height: {
    type: Number,
  },
});

module.exports = mongoose.model("progress", progress);
