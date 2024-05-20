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

    if (error) {
      if (error?.name === "AuthRetryableFetchError") {
        return res
          .status(503)
          .json({ message: "Request failed due to a network issue!" });
      }
      return res.status(400).json({ message: "Invalid credentials!" });
    }
    const { user, session } = data;
    const signInResponse = {
      id: user?.id,
      email: user?.email,
      role: user?.role,
      access_token: session?.access_token,
      refresh_token: session?.refresh_token,
      expires_in: session?.expires_in,
      firstName: user?.user_metadata?.first_name,
      lastName: user?.user_metadata?.last_name,
    };
    return res.status(200).json(signInResponse);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "An unexpected error occurred" });
  }
});

router.post("/register", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const { error } = registerSchema.validate({
    email,
    password,
    firstName,
    lastName,
  });

  if (error) {
    const errorMessage = error?.details[0].message;
    return res.status(400).json({ message: errorMessage });
  }
  try {
    const userMetadata = {
      first_name: firstName,
      last_name: lastName,
    };
    const { data, error } = await authServices.signUp(
      email,
      password,
      userMetadata
    );
    if (error) {
      if (error?.name === "AuthRetryableFetchError") {
        return res
          .status(503)
          .json({ message: "Request failed due to a network issue!" });
      }
      const errMessage = error?.message;
      return res.status(400).json({ message: errMessage });
    }
    const { user, session } = data;
    const signUpResponse = {
      id: user?.id,
      email: user?.email,
      role: user?.role,
      access_token: session?.access_token,
      refresh_token: session?.refresh_token,
      expires_in: session?.expires_in,
      firstName: user?.user_metadata?.first_name,
      lastName: user?.user_metadata?.last_name,
    };
    return res.status(201).json(signUpResponse);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "An unexpected error occurred" });
  }
});
module.exports = router;
