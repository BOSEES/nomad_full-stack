const http = require('http');
const fs = require("fs");
const { captureRejectionSymbol } = require('events');
const hostname = '127.0.0.1';
const port = 3000;

http.createServer(function(req,res) {
  let url = req.url;
    fs.readFile("index.html","utf8", function (err, data) {
      if (err) {
        console.log("에러다");
      } else {
        res.writeHead(200);
        res.end(data)
      }
    })
}).listen(port,hostname,function(){
console.log(`ㅁㄴㅇㅁㄴ${port}${hostname}`);
});

http.createServer(function (req, res) {
  var jsonData = "asdasda";
  req.on('data', function (chunk) {
    jsonData += chunk;
  });
  req.on('end', function () {
    var reqObj = JSON.parse(jsonData);
    var resObj = {
      message: "Hello " + reqObj.name,
      question: "Are you a good " + reqObj.occupation + "?"
    };
    res.writeHead(200);
    res.end(JSON.stringify(resObj));
  });
}).listen(3000);