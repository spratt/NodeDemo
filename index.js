/******************************************************************************
* Import parts                                                                *
******************************************************************************/
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

/******************************************************************************
* Connect the request handlers                                                *
******************************************************************************/
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

/******************************************************************************
* Start the server                                                            *
******************************************************************************/
server.start(14974, router.route, handle);