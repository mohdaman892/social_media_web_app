const express = require("express");
const { postUsers, authUser } = require("../controllers/userController");

const router = express.Router();

router.post("/", postUsers);
router.post("/auth", authUser);

module.exports = router;
