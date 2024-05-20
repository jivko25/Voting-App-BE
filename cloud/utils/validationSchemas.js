const Joi = require("joi");

// Write schemas for validation of data, for more info - https://joi.dev/api/?v=17.13.0

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
});

module.exports = {
  loginSchema,
  registerSchema,
};
