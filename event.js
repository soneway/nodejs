var util = require('util'),
    events = require('events');

function Server() {
    console.log('init');
}

util.inherits(Server, events.EventEmitter);

var s = new Server();

s.on('xxx', function () {
    console.log('xxx');
});

s.emit('xxx');