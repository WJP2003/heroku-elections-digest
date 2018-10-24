// index.js

var http = require('http');
var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
	var fs = require('fs');
	if(req.url == "/" || req.url == "") {
		fs.readFile("/files/index.html", function(err,data) {
			res.write(data); // write a response to the client
		});
	} else {
		if(req.url != "/" && req.url != "" && fs.readFile("/files"+req.url)) {
			fs.readFile("/files"+req.url, function(err,data) {
				res.write(data); // write a response to the client
			});
		} else {
			res.write(req.url);
		}
	}
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(); // end the response
}).listen(port);
