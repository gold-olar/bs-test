const BaseController = require("../controllers/base.ctrl");
const Validator = require("validatorjs");

class ValidatorMiddleware extends BaseController {
  constructor() {
    super();
  }

  async validateUserCreation(req, res, next) {
    const rules = {
      name: "required",
    };

    const validate = new Validator(req.body, rules);

    if (!validate.passes()) {
      const err = new Error();
      err.message = validate.errors;
      err.statusCode = 400;

      return super.sendError(res, err, err.message, 400);
    }

    return next();
  }
}

module.exports = new ValidatorMiddleware();
