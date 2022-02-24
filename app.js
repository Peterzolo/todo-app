const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("<htlm><h1>Welcome To Boostar101.com</h1></html>");
});

module.exports = app;
