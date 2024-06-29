const mongoose = require("mongoose")

function connectwithdb()//first para is connection string
{
    mongoose.connect("mongodb://localhost:27017/gymmemberdb").then(()=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectwithdb
