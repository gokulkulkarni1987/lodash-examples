'use strict';
//Initialize Environment Variables
require('dotenv').config();

// const nodereport = require('node-report');

// nodereport.triggerReport();

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

require('./src/configs/dbconfig');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const controllers = require('./src/server/controllers');

controllers.set(app);


app.get('/welcome', (req, res) => {
  const response = {
    status: 'SUCCESS',
    message: 'Welcome to Socially Good! '
  };
  res.json(response);
});


console.log('---- process.env.API_PORT ', process.env.API_PORT);
app.listen(process.env.API_PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`*** API Sever is listening on http://localhost:${process.env.API_PORT}`);
});
