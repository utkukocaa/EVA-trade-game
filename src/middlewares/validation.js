const BadRequestError = require("../errors/bad-request");

const validate = (schema, source) => (req, res, next) => {
  //added options to fix error message has slash inside
  const options = {
    errors: {
      wrap: {
        label: "",
      },
    },
    convert: false,
  };
  const { value, error } = schema.validate(req[source], options);

  if (error) {
    const errorMessage = error?.details
      ?.map((detail) => detail?.message)
      .join(", ");

    throw new BadRequestError(errorMessage);
  }
  Object.assign(req, value);
  next();
};

module.exports = validate;
