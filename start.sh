#!/bin/bash

# absolute path to the node executable
NODE=/home/sdp/bin/node

# absolute path to the index script
APP=/home/sdp/webapps/node_demo/index.js

# a file in which to store a running pid
SERVER_FILE=server.pid

# stop if already running
if [[ -f $SERVER_FILE ]]; then
    kill -9 `cat server.pid` && rm server.pid
fi

# if stop unsuccessful, bail
if [[ -f $SERVER_FILE ]]; then
    exit
fi

# start server
$NODE $APP &
echo $! > $SERVER_FILE # write pid to file

