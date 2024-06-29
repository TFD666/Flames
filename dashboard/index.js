const express = require('express');
const connectwithdb = require("./db")
const gymmember = require("./model/gymmember.model");

connectwithdb()

const app = express();

app.get("/",(req,res)=>{
    res.send("hello from backend")
})

app.get("/gymmember",(req,res)=>{

    const newgymmember = gymmember.create({
        name : "vansh",
        mobno : 7453956763,
        email : "vanshgarg764@gmail.com"
    })
    res.send("all gymmembers")
})

app.get("/details/gymmember", async (req, res)=>{
    const details = await gymmember.find()

    console.log(details)
    res.send("details of gymmember")
})

app.listen(3000, ()=>{
    console.log("app is listening on port 3000")
})