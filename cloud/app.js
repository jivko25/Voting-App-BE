// Require the necessary modules
var express = require('express');
var bodyParser = require('body-parser');

// Create an Express application
var app = express();

// Set up the views directory
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Set up the Body Parser to your App
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

// Handle GET requests to the root URL
app.get('/', function(req, res) {
  console.log('Received a GET request to the root URL');
  res.send('Hello, world!');
});

// Start the server on port 3000
app.listen(3000, function() {
  console.log('App is listening on port 3000');
});