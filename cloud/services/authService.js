const supabase = require("../configs/supabaseConfig");

function signIn(email, password) {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
}

function signUp(email, password) {
  return supabase.auth.signUp({
    email,
    password,
  });
}
module.exports = {
  signIn,
  signUp,
};
