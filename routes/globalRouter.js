const express = require("express");

const globalRouter = express.Router();

globalRouter.get("/",(req, res) => res.send("홈화면"));

module.exports = globalRouter;