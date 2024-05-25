const Joi = require("joi");


// Write schemas for validation of data, for more info - https://joi.dev/api/?v=17.13.0

//Ensures that the password is at least 8 characters long and contains at least one uppercase letter, one lowercase letter, one number, and one special character
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(passwordRegex).required().messages({
    "string.pattern.base":
      "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character and be at least 8 characters long",
  }),

  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
});

const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

const resetPasswordSchema = Joi.object({
  newPassword: Joi.string().pattern(passwordRegex).required().messages({
    "string.pattern.base":
      "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character and be at least 8 characters long",
  })
})

module.exports = {
  loginSchema,
  registerSchema,
  forgotPasswordSchema,
  resetPasswordSchema
};
