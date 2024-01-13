const mongoose = require("mongoose");

const markSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
    },
    desc: {
      type: String,
      required: false,
    },
    text: {
      type: String,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Mark", markSchema);
