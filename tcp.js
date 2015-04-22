var net = require('net');

var chatServer = net.createServer(),
    clients = [];

chatServer.on('connection', function (client) {
    console.log({}.toString.call(client));
    client.name = client.remoteAddress + ':' + client.remotePort;
    client.write('你好' + client.name + '!\n');
    clients.push(client);

    client.on('data', function (data) {
        broadcast(data, client);
    });

    client.on('end', function () {
        clients.splice(clients.indexOf(client), 1);
    });
});

function broadcast(data, client) {
    for (var i = 0, len = clients.length; i < len; i++) {
        var item = clients[i];
        if (client !== item) {
            item.write(client.name + ' says ' + data);
        }
    }
}

chatServer.listen(9000);