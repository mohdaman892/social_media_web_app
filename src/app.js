const express = require("express");
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());

app.use(cookieParser());

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.options("*", cors());

app.use(`/${process.env.APP_NAME}/users`, userRoutes);
app.use(`/${process.env.APP_NAME}/profile`, profileRoutes);
module.exports = app;
