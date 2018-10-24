// index.js

var http = require('http');
var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
	var fs = require('fs');
	fs.readFile("." + req.url, function(err,data) {
		res.write(data); // write a response to the client
	});
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(); // end the response
}).listen(port);
