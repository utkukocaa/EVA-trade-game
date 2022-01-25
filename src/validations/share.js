const Joi = require("joi");

const addShare = Joi.object({
  name: Joi.string()
    .regex(/^[a-zA-Z]*$/)
    .required()
    .min(3)
    .max(3),
  price: Joi.number().precision(2).required(),
});

module.exports = {
  addShare,
};
