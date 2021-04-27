const routes = require("./routes");
const multer = require("multer");
const uploadVideo = multer({ dest: "uploads/videos/" }); //파일이 저장될 위치

const uploadVideoMiddleware = uploadVideo.single("videoFile")

const localMiddlewear = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id:1
  }
  next();
}

module.exports = {localMiddlewear, uploadVideoMiddleware};