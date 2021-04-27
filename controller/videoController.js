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
const search = async (req, res) => {
  const {query : { term :searchingBy }} = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: {$regex: searchingBy, $options: "i"}
    })
  } catch(error) {
    console.log(error);
  }
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
  res.redirect(routes.videoDetail(newVideo.id));
}
const videoDetail = async (req, res) =>{
  const {params: {id}} = req;
  try {
    const video = await Video.findById(id);
    console.log(video);
    res.render("videoDetail", {title: video.title, video: video})
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
}
const getEditVideo = async (req, res) =>{
  const {params: {id}} = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", {title: `Edit ${video.title}`,video: video});
  } catch (error) {
    console.log(error)
  }
}

const postEditVideo = async (req, res) => {
  const {
    params:{id},
    body:{title, description}
    } = req;
  try{
    const video = await Video.findOneAndUpdate({_id: id},{
      title: title,
      description: description})
      res.redirect(routes.videoDetail(video.id));
  } catch (error) {
    res.redirect(routes.home)
  }
}

const deleteVideo = async (req, res) => {
  const {params: {id}} = req;
  try{
    await Video.findByIdAndRemove({_id: id});
  } catch(error) {
    console.log(error);
  }
  res.redirect(routes.home)
}


module.exports = {home, search, getUpload, postUpload,  videoDetail, getEditVideo, postEditVideo,  deleteVideo}