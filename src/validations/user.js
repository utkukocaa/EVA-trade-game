const Joi = require("joi");

const createUser = Joi.object({
  username: Joi.string().required().min(2),
});
const controlBodyForExchange = Joi.object({
  name: Joi.string()
    .regex(/^[a-zA-Z]*$/)
    .required()
    .min(3)
    .max(3),

  count: Joi.number().required().min(1),
});

module.exports = {
  createUser,
  controlBodyForExchange,
};
