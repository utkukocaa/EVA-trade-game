const User = require("../models/User");
const BaseService = require("./BaseService");

class UserService extends BaseService {
  constructor() {
    super(User);
  }
  updateTransition(id, data, opts) {
    return User.findByIdAndUpdate(id, data, { new: true, opts });
  }
}

module.exports = new UserService();
