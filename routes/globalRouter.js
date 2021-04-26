const express = require("express");
const routes = require("../routes");
const { home, search } = require("../controller/videoController");
const { getJoin, postJoin, getLogin, postLogin, logout } = require("../controller/userController");

const globalRouter = express.Router();

globalRouter.get(routes.join,getJoin);
globalRouter.post(routes.join,postJoin);

globalRouter.get(routes.login,getLogin);
globalRouter.post(routes.login,postLogin);


globalRouter.get(routes.home,home);
globalRouter.get(routes.logout,logout);
globalRouter.get(routes.search,search);

module.exports = globalRouter;