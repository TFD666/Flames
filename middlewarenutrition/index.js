const express = require('express');
const db = require('./db');
const routes = require('./routes');
const { cookieParser } = require('./middleware');

const app = express();

// Use cookie-parser middleware
app.use(cookieParser());

// Use routes from routes.js
app.use('/', routes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
