const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for logging requests
app.use(logger('dev'));

// Your routes and other application logic
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
