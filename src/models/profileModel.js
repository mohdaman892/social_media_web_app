const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  followers: {
    type: Object,
    required: true,
  },
  following: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("profile", profileSchema);
