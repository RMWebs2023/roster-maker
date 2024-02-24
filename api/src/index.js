const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connection = require("./database.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(PORT, () => {
  connection();
  console.log("Server is listening on port", PORT);
});
