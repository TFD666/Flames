const express = require("express");
const mongoose = require("mongoose");
const user = require("./model/user");
const progress = require("./model/progress");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/otter");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Creates a user with the provided credentils and assigns a random progress value (20)
app.post("/login", async (req, res) => {
  // creating user
  await user.create({
    name: req.body.name,
    pwd: req.body.pwd,
  });

  // creating another schema to store the pbar value of the user
  await progress.create({
    user: req.body.name,
    pbar: 20,
  });

  // redirects to a page where user data can be fetched
  res.sendFile(__dirname + "/getter.html");
});

app.post("/getdetails", async (req, res) => {
  // stores username sent from frontend
  const uname = req.body.uname;

  // returns the data that contains the username from dbms
  // if no user exists, returns null
  const data = await progress.findOne({ user: uname });

  // prints the json, check it out
  console.log(data);
  //   console.log(data.user);

  // send the json back to frontend as response
  res.send(data);
});

app.listen(3000, (err) => {
  console.log("http://localhost:3000");
});
