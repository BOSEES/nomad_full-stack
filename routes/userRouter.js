const express = require("express");
const routes = require("../routes");
const { users, editProfile, changePassword, userDetail } = require("../controller/userController");
const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail); //맨 아래로

module.exports = userRouter;