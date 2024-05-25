const { createClient } = require("@supabase/supabase-js");


// Initialize Supabase
const supabaseUrl = process.env.API_URL
const supabaseKey = process.env.API_KEY
const supabaseConfig = createClient(supabaseUrl, supabaseKey, {
  // change flowtype to pkce , because we need  auth code in callback url in reset password to create a session 
  auth: {
    flowType: "pkce",
  },
});

module.exports = supabaseConfig;
