const mongoose = require("mongoose");

const ShareSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    count: {
      type: Number,
      default: 100,
    },
    price: Number,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Share", ShareSchema);
