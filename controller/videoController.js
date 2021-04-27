const routes = require("../routes");
const Video = require("../models/Video");

const home = async (req, res) => {
  try{
    const videos = await Video.find({});
    res.render("home", {title: "Home", videos})
  } catch (error){
    console.log(error);
    res.render("home", {title: "Home", videos: []})
  }

  
}
const search = (req, res) => {
  const {query : { term :searchingBy }} = req;
  res.render("search", {title: "Search", searchingBy: searchingBy, videos})
}
const getUpload = (req, res) => res.render("upload", {title: "upload"})
const postUpload = async (req, res) => {
  const {
    body: {title, description}, 
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title:title,
    description: description
  })
  //to DO : upload and save video
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
}
const videoDetail = (req, res) => res.render("videoDetail", {title: "Video Detail"})
const editVideo = (req, res) => res.render("editVideo", {title: "Edit Video"})
const deleteVideo = (req, res) => res.render("deleteVideo", {title: "Delete vidoe"})

module.exports = {home, search, getUpload, postUpload,  videoDetail, editVideo, deleteVideo}