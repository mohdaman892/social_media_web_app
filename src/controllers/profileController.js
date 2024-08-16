const Profile = require("../models/profileModel");
const { decodeToken } = require("../utils/common_utils");

const getProfile = async (req, res) => {
  try {
    user_id = await decodeToken(req);
    profile_doc = await Profile.find({ userId: user_id });
    if (profile_doc) {
      res.json(profile_doc);
    } else {
      res.status(404).json({ Message: "Profile Not Found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProfile };
