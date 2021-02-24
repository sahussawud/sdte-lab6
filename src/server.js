const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Hello This is The Terminator in 2021!");
});

module.exports = app;
