const dotenv = require('dotenv').config();

const express = require('express');
const parser = require('body-parser');
const path = require('path');

const { router } = require('./router/router.js');

const app = express();
const PORT = process.env.PORT;

app.use(parser);
app.use(parser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(PORT, err => {
  if (err) {
    console.log('error connecting to server: ', err);
  }
  console.log(`connected to server on PORT: ${PORT}`);
});
