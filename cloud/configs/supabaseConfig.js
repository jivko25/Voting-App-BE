const { createClient } = require("@supabase/supabase-js");

// Initialize Supabase
const supabaseUrl = process.env.API_URL;
const supabaseKey = process.env.API_KEY;
const supabaseConfig = createClient(supabaseUrl, supabaseKey);

module.exports = supabaseConfig;