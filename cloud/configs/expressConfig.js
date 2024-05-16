const bodyParser = require("body-parser");
const cors = require('cors');

// Create an Express application

function expressConfig(app) {
    app.use(cors());
    // // Set up the Body Parser to your App
    app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));
}

module.exports = expressConfig;
