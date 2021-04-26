const routes = require("../routes");

const getJoin = (req, res) => res.render("join", {title: "Join"});
const postJoin = (req, res) => {
  const {body : {name, email, password, password2}} = req;
  if(password !== password2) {
    res.status(400);
    res.render("join", {title: "Join"})
  } else {
    res.redirect(routes.home);
  }
};

const getLogin = (req, res) => res.render("login", {title: "Login"})
const postLogin = (req, res) => {
  console.log(req)
  const {body: {name, password}} = req;
  res.redirect(routes.home);
}

const logout = (req, res) => res.redirect(routes.home);
const users = (req, res) => res.render("users", {title: "Users"})
const editProfile = (req, res) => res.render("editProfile", {title: "Edit Profile"})
const changePassword = (req, res) => res.render("changePassword", {title: "Change Password"})
const userDetail = (req, res) => res.render("userDetail", {title: "Detail"})

module.exports = {postJoin, getJoin, postLogin, getLogin, logout, users, editProfile, changePassword,userDetail};