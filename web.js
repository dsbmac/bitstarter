var express = require('express');
var fs = require("fs");
var app = express.createServer(express.logger());
var buffer = fs.openSync('./index.html', "r"); 
var msg = buf.toString(fs.readSync(buffer));
app.get('/', function(request, response) {
  response.send(msg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
