const Joi = require("joi");

// Write schemas for validation of data, for more info - https://joi.dev/api/?v=17.13.0

export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const registerSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});
