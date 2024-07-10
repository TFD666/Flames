const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    Username:{
        type:String,
        required:true,
        trim:true,
    },
    Email_Id:{
        type:String,
        required:true,
        trim:true
    },
    PhoneNumber:{
        type:Number,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Password:{
        type:String,
        required:true,
        trim:true
    }
})

const UserModel = mongoose.model("user",UserSchema);

module.exports = UserModel;