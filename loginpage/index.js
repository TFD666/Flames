const express = require('express')
const ConnectWithdb = require('./db')
const User = require("./model/user.model")
const app = express()
ConnectWithdb()

app.get("/",async(req,res)=>{
    res.send("kuch to karle bhai zindagi mein")
})

app.get("/Sign_Up",async(req,res)=>{ 
    const newUser = User.create({ 
        username:"harsh_parashar10",
        Email:"abc@gmail.com",
        Phone_no:"6547856789",
        password:"87886767"
    }) 
    res.send("all students data")
})

app.get("/Log_in",async(req,res)=>{
   
    res.send("already joined")
})

app.get("/settings",async(req,res)=>{
    res.send("yha changes honge")
})

app.listen(7000,()=>{
    console.log(" port no. 7000 pe chal raha hai")
})