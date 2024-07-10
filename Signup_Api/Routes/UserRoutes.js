const express = require("express");
const { createUsers } = require("../Middleware/UserMiddleware");
// const { createUsers } = require("../Middleware/UserMiddleware");
const UserRoute = express.Router();
// console.log("harsh")
UserRoute.post('/signup',createUsers)//middleware function
// UserRoutee.post('/testing',)
module.exports = UserRoute;

// const user = express.Router();
// user.post('/hiiii',createUsers)
// module.exports = user