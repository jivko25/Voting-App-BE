const router = require("express").Router();
const authServices = require("../services/authService");
const { loginSchema, registerSchema } = require("../utils/validationSchemas");
const e = require("express");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });

  if (error) {
    const errorMessage = error?.details[0].message;
    return res.status(400).json({ message: errorMessage });
  }
  try {
    const { data, error } = await authServices.signIn(email, password);
    console.log(error);
    if (error) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const { user, session } = data;
    const signInResponse = {
      id: user?.id,
      email: user?.email,
      role: user?.role,
      access_token: session?.access_token,
      refresh_token: session?.refresh_token,
      expires_in: session?.expires_in,
    };
    return res.status(200).json(signInResponse);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "An unexpected error occurred" });
  }
});
module.exports = router;
