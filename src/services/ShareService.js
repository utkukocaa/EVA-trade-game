const Share = require("../models/Share");
const BaseService = require("./BaseService");

class ShareService extends BaseService {
  constructor() {
    super(Share);
  }
}

module.exports = new ShareService();
