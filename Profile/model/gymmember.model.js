const mongoose = require("mongoose")

const gymmemberSchema = mongoose.Schema({
    name : String,
    mobno : Number,
    email : String
})

const gymmember = mongoose.model("gymmember",gymmemberSchema)

module.exports = gymmember