// Require the necessary modules
var express = require("express");
var bodyParser = require("body-parser");
const cors = require('cors');

var { createClient } = require("@supabase/supabase-js");

// Create an Express application
var app = express();

app.use(cors());

// // Set up the Body Parser to your App
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Supabase
var supabaseUrl = "https://ljudvicwjqokilajymhm.supabase.co";
var supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqdWR2aWN3anFva2lsYWp5bWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2NzM2ODYsImV4cCI6MjAzMTI0OTY4Nn0.S_g4ETh7Pq5llUuRnH-GV8GkWiiC3oH4hisCWx_NxUg";
var supabase = createClient(supabaseUrl, supabaseKey);

// Handle GET requests to the root URL
app.get("/", function (req, res) {
  res.json({ message: "Hello, world!", status: "success", code: 200 });
});

app.get("/proposals", async function (req, res) {
  const { data, error } = await supabase
    .from('proposals')
    .select('*')

    console.log('test test test')

  if (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching proposals", status: "error", code: 500 });
  } else {
    res.json({ data, status: "success", code: 200 });
  }
});

// Handle GET requests to the /proposals/:id URL
app.get("/proposals/:id", async function (req, res) {
  const { data, error } = await supabase
    .from('proposals')
    .select('*')
    .eq('proposal_id', req.params.id)

  if (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching proposal", status: "error", code: 500 });
  } else {
    res.json({ data, status: "success", code: 200 });
  }
});

app.patch("/proposals/:id", async function (req, res) {
  const { data, error } = await supabase
    .from('proposals')
    .update(req.body)
    .eq('proposal_id', req.params.id)

  if (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while updating proposal", status: "error", code: 500 });
  } else {
    res.json({ data, status: "success", code: 200 });
  }
});

app.post("/proposals", async function (req, res) {
  //TODO: change user id ('beee89a1-0c38-44a6-9640-e2fc8d8f4ded') to be taken from the request
  const { data, error } = await supabase
    .from('proposals')
    .insert([
      { title: req.body.title, description: req.body.description, created_by: 'beee89a1-0c38-44a6-9640-e2fc8d8f4ded' }
    ])

  if (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while creating proposal", status: "error", code: 500 });
  } else {
    res.json({ data, status: "success", code: 200 });
  }
});

app.patch("/proposals/:id", async function (req, res) {
  const { data, error } = await supabase
    .from('proposals')
    .update(req.body)
    .eq('proposal_id', req.params.id)

    console.log(req.body, data)

  if (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while updating proposal", status: "error", code: 500 });
  } else {
    res.json({ data, status: "success", code: 200 });
  }
});

app.delete("/proposals/:id", async function (req, res) {
  const { data, error } = await supabase
    .from('proposals')
    .delete()
    .eq('proposal_id', req.params.id)

  if (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while deleting proposal", status: "error", code: 500 });
  } else {
    res.json({ data, status: "success", code: 200 });
  }
});

// Start the server on port 3000
app.listen(3000, function () {
  console.log("App is listening on port 3000");
});