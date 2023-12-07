const mongoose = require("mongoose");

const studSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  version: {
    type: String,
  },
  fields: [
    {
      fieldLabel: {
        type: String,
      },
      fieldValue: {
        type: String,
      },
      editAccess: {
        type: Boolean,
        default: false,
      },
    }
  ],
});

module.exports = mongoose.model("Stud", studSchema);
