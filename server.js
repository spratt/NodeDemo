/******************************************************************************
* Requirements                                                                *
******************************************************************************/
var http = require('http');
var url  = require('url');

/******************************************************************************
* Server function                                                             *
******************************************************************************/
function start() {
    var __PORT__ = 14974;
    
    function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write("Request for " + pathname + " received.");
	response.end();
    };
    
    http.createServer(onRequest).listen(__PORT__);
};

/******************************************************************************
* Exports                                                                     *
******************************************************************************/
exports.start = start;