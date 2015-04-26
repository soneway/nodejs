var dgram = require('dgram');

var client = dgram.createSocket('udp4');

var message = new Buffer('哈哈哈');

client.send(message, 0, message.length, 12345, 'localhost', function (err, bytes) {
    client.close();
});