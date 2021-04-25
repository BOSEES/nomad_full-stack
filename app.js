const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const userRouter =require("./routes/userRouter.js");
const videoRouter =require("./routes/videoRouter.js");
const globalRouter = require("./routes/globalRouter.js")
const app = express();


app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

module.exports = app;