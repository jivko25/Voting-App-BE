// Require the necessary modules
const express = require("express");
const expressConfig = require("./configs/expressConfig");
const routes = require("./routes");
const PORT = 5000;

// Create an Express application
const app = express();

expressConfig(app);

app.use(routes);

// Start the server on port 3000
app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}`);
});
