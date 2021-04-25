const app = require("./app.js");

const port = 3000;


const handleListening = () => console.log(`listening on: http://localhost:${port}`);

app.listen(port, handleListening); 