const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const { generateToken } = require("../utils/common_utils");

const saltRounds = 10;

const postUsers = async (req, res) => {
  try {
    const body = req.body;
    for (user_dict of body) {
      user_dict["password"] = await bcrypt.hash(user_dict.password, saltRounds);
      const new_user = new User(user_dict);
      await new_user.save();
      res.json("User Successfully Created");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const authUser = async (req, res) => {
  try {
    const body = req.body;
    user_doc = await User.find({ email: body.email });
    user_hash = user_doc[0]["password"];
    if (await bcrypt.compare(body.password, user_hash)) {
      jwt_token = await generateToken(user_doc[0]);
      res.cookie("token", jwt_token, {
        sameSite: "None",
        secure: true,
        httpOnly: false,
      });
      res.json({
        Message: "User Successfully Authenticated",
      });
    } else {
      res.status(401).json("Wrong Password!");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { postUsers, authUser };
