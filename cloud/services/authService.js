const supabase = require("../configs/supabaseConfig");

async function signIn(email, password) {
  return (loginResponse = await supabase.auth.signInWithPassword({
    email,
    password,
  }));
}

async function signUp(email, password, metaData = {}) {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metaData,
    },
  });
}
module.exports = {
  signIn,
  signUp,
};
