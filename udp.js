var dgram = require('dgram');

var server = dgram.createSocket('udp4');

server.on('message', function (msg, client) {
    console.log(msg + 'from' + client.address + ':' + client.port);
});

server.on('listening', function () {
    var address = server.address();
    console.log(address.address + ':' + address.port);
});

server.bind(12345);