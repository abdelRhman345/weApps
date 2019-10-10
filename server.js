var StaticServer = require('static-server');

var server = new StaticServer({
    rootPath: './dist/',
    port: 4444
});

server.start(function () {
    console.log('Server Listening to', server.port);
});