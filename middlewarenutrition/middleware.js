const multer = require('multer');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const express = require('express');

// Set up multer to handle image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    jwt.verify(token, 'your_jwt_secret_key', (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  upload,
  authenticateJWT,
  cookieParser
};
