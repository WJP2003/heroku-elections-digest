// index.js

var http = require('http');
var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
	if(req.url != "/") {
		res.writeHead(302, {'Location': '/'});
	});

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write("Hello World!");
	res.end(); // end the response
}).listen(port);
