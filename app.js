const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const userRouter =require("./routes/userRouter.js");
const videoRouter =require("./routes/videoRouter.js");
const globalRouter = require("./routes/globalRouter.js")
const routes = require("./routes");
const localMiddlewear = require("./middlewares.js");
const app = express();

app.set("view engine", "pug");
app.use(helmet({contentSecurityPolicy:false}));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(localMiddlewear);


app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

module.exports = app;