const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        type: String
    },
    pwd: {
        type: String
    }
});

module.exports = mongoose.model('user',user)