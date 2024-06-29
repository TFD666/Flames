const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { Exercise, Diet, Day } = require("./model");
const db = require("./db");

app.use(bodyParser.json());

// Create API routes
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.get("/days", async (req, res) => {
  const days = await Day.find().populate("exercises").populate("diet");
  res.json(days);
});

app.get('/days/:id', async (req, res) => {
  const day = await Day.findById(req.params.id).populate("exercises").populate("diet");
  res.json(day);
});

app.post("/days", async (req, res) => {
  const day = new Day(req.body);
  await day.save();
  res.json(day);
});

app.put("/days/:id", async (req, res) => {
  const day = await Day.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(day);
});

app.delete("/days/:id", async (req, res) => {
  await Day.findByIdAndRemove(req.params.id);
  res.json({ message: "Day deleted successfully" });
});

app.listen(8000, ()=>{
  console.log("Server started on port 8000");
});