const express = require('express');
const path = require('path');

//import routes
const wordleRoutes = require('./routes/wordleRoute');

const app = express();

app.use(express.json()); //takes input as json
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'views'))); //serves front end

app.use('/', wordleRoutes);

module.exports = app;