const express = require("express");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());

app.use(`/${process.env.APP_NAME}/users`, userRoutes);
module.exports = app;
