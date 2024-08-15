const express = require("express");
const app = require("./src/app");
const { connectDB } = require("./src/config/dbConfig");

const PORT = process.env.PORT || 3000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
