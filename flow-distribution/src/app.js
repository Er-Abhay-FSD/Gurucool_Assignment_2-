// src/app.js

const express = require('express');
const app = express();
const routes = require('./routes/routes');

// Middleware to parse JSON bodies
app.use(express.json());

// Mounting routes
app.use('/api', routes);

module.exports = app;
