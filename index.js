// index.js

var http = require('http');
var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
	function respond {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write("Hello World!");
		res.end(); // end the response
	}
	
	if(req.url != "/") {
		res.writeHead(302, {'Location': '/'});
		res.write("Redirecting to <a href=\"/\">here</a>");
	} else {
		respond();
	}
}).listen(port);
