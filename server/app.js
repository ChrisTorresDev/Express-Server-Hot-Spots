const express = require('express');
const morgan = require('morgan');
const data = require('./data');

const app = express();

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.status(200).send('New Express Server');
});

app.get('/data', function (req, res) {
  res.json(data);
});

module.exports = app;
