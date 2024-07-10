const mongoose = require("mongoose")
// mongoose.connect("mongodb+srv://aman:aman123@backend.e5eheie.mongodb.net/").then(()=>{
mongoose.connect("mongodb+srv://harsh:harsh123@cluster0.5eladez.mongodb.net/").then(() => {
    console.log("my db is connect")
}).catch((error) => {
    console.log("problem is connect", error)
})