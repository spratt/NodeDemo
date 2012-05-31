/******************************************************************************
* Requirements                                                                *
******************************************************************************/
var http = require('http');
var url  = require('url');

/******************************************************************************
* Variables                                                                   *
******************************************************************************/
var __PORT__ = 14974;

/******************************************************************************
* Server function                                                             *
******************************************************************************/
function start() {
    function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
    };
    http.createServer(onRequest).listen(__PORT__);
};

exports.start = start;