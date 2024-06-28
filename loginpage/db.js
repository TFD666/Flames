const mongoose = require('mongoose')

function ConnectWithdb(){
    mongoose.connect("mongodb://localhost:27017/My_Fitness_DB").then(()=>{
        console.log("connected to database")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = ConnectWithdb;