const express = require('express');
const path = require('path');
const wordleRoutes = require('./routes/wordleRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', wordleRoutes);

module.exports = app;