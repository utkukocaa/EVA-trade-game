const ShareService = require("../services/ShareService");

class ShareController {
  async add(req, res) {
    try {
      req.body.name = req.body.name.toUpperCase();

      const share = await ShareService.create(req.body);
      res.status(201).json(share);
    } catch (error) {
      res.status(500).json("Internal Server Error Occured!");
    }
  }
}

module.exports = new ShareController();
