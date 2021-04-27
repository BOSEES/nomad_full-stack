require("./db");
require("./models/Video.js");
require("./models/Comment.js");
const app = require("./app.js");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 4000;

const handleListening = () => console.log(`✅ listening on: http://localhost:${port}`);

app.listen(port, handleListening); 