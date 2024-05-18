const router = require("express").Router();
const authServices = require("../services/authService");
// const joi = require("joi");

// const loginSchema = joi.object({
//   email: joi.string().email().required(),
//   password: joi.string().required(),
// });

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  //   const error = loginSchema.validate({ email, password });
  //   if (error) {
  //     const errorMessage = error.error?.details[0].message;
  //     return res.status(400).json({ message: errorMessage });
  //   }
  try {
    const data = await authServices.signIn(email, password);
    if (!data) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    if (data?.error) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "An unexpected error occurred" });
  }
});
module.exports = router;
