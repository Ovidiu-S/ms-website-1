var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var string = fs.readFileSync('index.html', 'utf8');

app.use(express.static(__dirname));
app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
