const mongoose = require("mongoose");

const Config = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Version: {
      type: String,
      required: true,
    },
    Value: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Configuration = mongoose.model("Configuration", Config);
