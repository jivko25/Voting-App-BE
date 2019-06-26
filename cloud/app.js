// Require the module
var bodyParser = require("body-parser");

// Set up the views directory
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Set up the Body Parser to your App
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

//Require the routes.js file

require('./routes');