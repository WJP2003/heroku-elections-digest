// index.js

var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
	if(req.url != "/") {
		res.writeHead(302, {'Location': '/','Content-Type': 'text/plain'});
		res.write("Redirecting to <a href=\"/\">here</a>");
	} else {
		fs.readFile('house_of_reps.svg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		});
	}
}).listen(port);
