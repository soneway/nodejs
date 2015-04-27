var server = require('http').createServer(),
    io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log('sss');
});

server.listen(8080);