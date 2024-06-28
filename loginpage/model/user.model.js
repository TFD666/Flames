const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    // username:String,
    username:{
        type: String,
        required: true, 
        trim: true    
    },
    Email:String,
    Phone_no:Number,
    password:Number
})

const User = mongoose.model("users",UserSchema);
module.exports=User