const routes = require("./routes");

const localMiddlewear = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id:1
  }
  next();
}

module.exports = localMiddlewear;