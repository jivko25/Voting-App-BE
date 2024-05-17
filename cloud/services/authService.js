const supabase = require("../configs/supabaseConfig");

function signIn(email, password) {
  return supabase.auth.signIn({
    email,
    password,
  });
}
