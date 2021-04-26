const videos = require("../db");
const routes = require("../routes");

const home = (req, res) => res.render("home", {title: "Home", videos})
const search = (req, res) => {
  const {query : { term :searchingBy }} = req;
  res.render("search", {title: "Search", searchingBy: searchingBy, videos})
}
const getUpload = (req, res) => res.render("upload", {title: "upload"})
const postUpload = (req, res) => {
  const {
    body :{file, title, description}
  } = req;
  //to DO : upload and save video
  res.redirect(routes.videoDetail(123123));
}
const videoDetail = (req, res) => res.render("videoDetail", {title: "Video Detail"})
const editVideo = (req, res) => res.render("editVideo", {title: "Edit Video"})
const deleteVideo = (req, res) => res.render("deleteVideo", {title: "Delete vidoe"})

module.exports = {home, search, getUpload, postUpload,  videoDetail, editVideo, deleteVideo}