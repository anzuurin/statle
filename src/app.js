const express = require('express');
const path = require('path');
const greetingRoutes = require('./routes/greetingRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', greetingRoutes);

module.exports = app;