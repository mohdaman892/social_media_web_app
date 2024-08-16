const express = require("express");
const { getProfile } = require("../controllers/profileController");
const { authenticateJWT } = require("../utils/common_utils");

const router = express.Router();

router.get("/", authenticateJWT, getProfile);

module.exports = router;
