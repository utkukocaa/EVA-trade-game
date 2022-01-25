const User = require("../../models/User");
const ShareService = require("../../services/ShareService");
const UserService = require("../../services/UserService");

async function transaction(user, userId, shareId, shareCount) {
  const session = await User.startSession();
  session.startTransaction();

  try {
    const opts = { session };
    const updatedUser = await UserService.updateTransition(userId, user, opts);
    const updatedShare = await ShareService.update(shareId, {
      count: shareCount,
    });

    await session.commitTransaction();
    session.endSession();
    return {
      updatedUser,
      updatedShare,
    };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    throw error;
  }
}

module.exports = {
  transaction,
};
