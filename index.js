// index.js

var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello World!'); // write a response to the client
	res.end(); // end the response
}).listen(8080);
