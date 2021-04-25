const express = require("express");

const videoRouter = express.Router();

videoRouter.get("/video", (req, res) => res.send("video Index"));

module.exports = videoRouter;