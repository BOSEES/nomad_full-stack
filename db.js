const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser:true,
  useFindAndModify: false,
  useUnifiedTopology:true
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ connected DB");
const handleError = () => console.log("❌ connection Error");
db.once("open", handleOpen);
db.on("error", handleError);
