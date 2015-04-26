var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.end('hello song\n');
});
server.listen(8080);

server.on('upgrade', function (req, res, head) {
    var bf = new Buffer(head.length);
    head.copy(bf);

    var key = req.headers['sec-websocket-key'],
        shasum = crypto.createHash('sha1');

    key = shasum.update(key + 'song').digest('base64');
    var headers = [
        'HTTP/1.1 101 Switching Protocols',
        'Upgrade: websocket',
        'Connection: Upgrade',
        'Sec-Websocket-Accept: ' + key,
        'Sec-Websocket-Protocol: ' + protocol
    ];
    res.setNoDelay(true);
    res.write(headers.concat('', '').join('\r\n'));

    var ws = new WebSocket();
    ws.setSocket(res);
});