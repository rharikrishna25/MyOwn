var sys = require('sys');
http = require("http");
var server = http.createServer(function(request,response){
	response.writeHeader(200,{"Content-Type":"text/plain"})
	response.write('Hari yeah')
	response.end()
});

server.listen(12345);
