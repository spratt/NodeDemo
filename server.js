/******************************************************************************
* Requirements                                                                *
******************************************************************************/
var http = require('http');
var url  = require('url');

/******************************************************************************
* Server function                                                             *
******************************************************************************/
function start(port,route,handle) {
    
    function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write("Path: " + pathname + "\n");
	response.end();
    };
    
    http.createServer(onRequest).listen(port);
};

/******************************************************************************
* Exports                                                                     *
******************************************************************************/
exports.start = start;