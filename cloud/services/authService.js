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

async function forgotPassword(email) {
  return await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:3000/reset-password",
  });
}

async function createSessionWithAuthCode(authCode) {
  return supabase.auth.exchangeCodeForSession(authCode);
}

async function resetPassword(newPassword) {
  return await supabase.auth.updateUser({
    password: newPassword,
  });
}
module.exports = {
  signIn,
  signUp,
  forgotPassword,
  resetPassword,
  createSessionWithAuthCode,
};
