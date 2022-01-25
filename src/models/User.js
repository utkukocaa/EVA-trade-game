const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    portfolio: [
      {
        name: String,
        count: Number,
      },
    ],
    budget: {
      type: Number,
      default: 1000,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("User", UserSchema);
