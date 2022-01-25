const BadRequestError = require("../errors/bad-request");
const { transaction } = require("../scripts/utils/helper");
const ShareService = require("../services/ShareService");
const UserService = require("../services/UserService");

class UserController {
  async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json("Internal Server Error Occured!");
    }
  }

  async buy(req, res) {
    const { userId } = req.params;
    const { count, name } = req.body;

    try {
      const user = await UserService.findOne({ _id: userId });
      if (!user) {
        throw new NotFoundError(`No user found`);
      }

      const share = await ShareService.findOne({ name });
      if (!share) {
        throw new NotFoundError(`No share found`);
      }

      if (share.count >= count && count * share.price <= user.budget) {
        let objIndex = user.portfolio.findIndex((obj) => obj.name == name);

        if (objIndex === -1) {
          user.portfolio.push({
            name,
            count,
          });
        } else {
          user.portfolio[objIndex].count += count;
        }

        share.count -= count;
        user.budget -= count * share.price;

        const result = await transaction(user, userId, share._id, share.count);

        res.status(201).json(result);
      } else {
        res.status(500).json("Insufficent Funds or share count");
      }
    } catch (error) {
      res.status(500).json("Internal Error");
    }
  }

  async sell(req, res) {
    const { userId } = req.params;
    const { count, name } = req.body;

    try {
      const user = await UserService.findOne({ _id: userId });
      if (!user) {
        throw new NotFoundError(`No user found`);
      }

      let objIndex = user.portfolio.findIndex((obj) => obj.name == name);

      if (objIndex === -1) {
        throw BadRequestError(`${name} can not found in the user portfolio`);
      }

      const share = await ShareService.findOne({ name });
      if (!share) {
        throw new NotFoundError(`No share found`);
      }

      if (count <= user.portfolio[objIndex].count) {
        share.count += count;
        user.budget += count * share.price;
        user.portfolio[objIndex].count -= count;

        const result = await transaction(user, userId, share._id, share.count);
        res.status(201).json(result);
      } else {
        throw BadRequestError("You have insufficient share to sell");
      }
    } catch (error) {
      res.status(500).json("Internal Error");
    }
  }
}

module.exports = new UserController();
