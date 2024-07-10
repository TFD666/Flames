const express = require("express")
const bodyparser = require("body-parser")
// const user = require("./Routes/UserRoutes")
const UserRoute = require("./Routes/UserRoutes")

require("./Connection/conn");

const app=express()

require ("./Connection/conn")

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.get("/test",(req,res)=>{
    res.send("harsh")
})

app.use(UserRoute)
// app.use(user);

app.listen(8050,()=>{
    console.log("server is running on port no. 8050")
})