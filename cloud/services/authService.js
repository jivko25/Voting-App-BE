const supabase = require("../configs/supabaseConfig");

async function signIn(email, password) {
  return (loginResponse = await supabase.auth.signInWithPassword({
    email,
    password,
  }));
}

async function signUp(email, password) {
  return await supabase.auth.signUp({
    email,
    password,
  });
}
module.exports = {
  signIn,
  signUp,
};
