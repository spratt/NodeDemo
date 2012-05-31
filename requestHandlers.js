/******************************************************************************
* Request Handlers                                                            *
******************************************************************************/
function start(path,query,response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("start");
    response.end();
}
function upload(path,query,response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("upload");
    response.end();
}
function not_found(path,query,response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 not found");
    response.end();
}

/******************************************************************************
* Exports                                                                     *
******************************************************************************/
exports.start = start;
exports.upload = upload;
exports.not_found = not_found;