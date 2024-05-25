// Require the necessary modules
const express = require('express');
const expressConfig = require('./configs/expressConfig');
const routes = require('./routes');
const PORT = process.env.PORT;

// Create an Express application
const app = express();

expressConfig(app);

app.use(routes);

// Start the server
app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}`);
});
