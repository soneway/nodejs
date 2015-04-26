var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('你好!骚年!\n');
});

server.listen(8080);