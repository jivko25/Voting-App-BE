const { createClient } = require("@supabase/supabase-js");

// Initialize Supabase
const supabaseUrl = "https://ljudvicwjqokilajymhm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqdWR2aWN3anFva2lsYWp5bWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2NzM2ODYsImV4cCI6MjAzMTI0OTY4Nn0.S_g4ETh7Pq5llUuRnH-GV8GkWiiC3oH4hisCWx_NxUg";
const supabaseConfig = createClient(supabaseUrl, supabaseKey);

module.exports = supabaseConfig;