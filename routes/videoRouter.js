const express = require("express");
const routes = require("../routes");
const { home, getUpload, postUpload, videoDetail, getEditVideo,postEditVideo, deleteVideo } = require("../controller/videoController");
const {uploadVideoMiddleware} = require("../middlewares.js");
const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload,uploadVideoMiddleware, postUpload);

videoRouter.get(routes.videos, home);
videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);

module.exports = videoRouter;