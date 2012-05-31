var url = require("url");

/******************************************************************************
* Routing function                                                            *
******************************************************************************/
function route(handle,request,response) {
    var path = url.parse(request.url).pathname;
    var query = url.parse(request.url).query;
    
    if(typeof handle[path] === 'function') {
	handle[path](path,query,response);
    } else if(typeof handle['not_found'] === 'function') {
	handle['not_found'](path,query,response);
    } else {
	// default error message
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("404 not found \n");
	response.write("additionally, the error page could not be found");
	response.end();
    }
}

/******************************************************************************
* Exports                                                                     *
******************************************************************************/
exports.route = route;