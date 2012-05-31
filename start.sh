#!/bin/bash
NODE=/home/sdp/bin/node
APP=/home/sdp/webapps/node_demo/index.js

SERVER_FILE=server.pid

# stop if already running
if [[ -f $SERVER_FILE ]]; then
    kill -9 `cat server.pid` & rm server.pid
fi

# start
$NODE $APP &
echo $! > $SERVER_FILE # write 

