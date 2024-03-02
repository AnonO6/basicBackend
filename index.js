import express from "express";
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("YOO!!!");
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${port}`);
});
