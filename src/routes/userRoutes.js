const express = require("express");
const { authenticateJWT } = require("../utils/common_utils");
const {
  getUsers,
  postUsers,
  authUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", authenticateJWT, getUsers);
router.post("/", postUsers);
router.post("/auth", authUser);

module.exports = router;
