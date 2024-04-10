const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile('C:\\Users\\user\\Desktop\\cognify intern Bharani\\Task2\\index.html');
});

// Handle form submission
app.post('/submit-form', (req, res) => {
  // Handle form submission logic here
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
