process.on('uncaughtException', function (er) {
    console.log('Exception: ' + er);
});

console.log(process);

/*
setTimeout(function () {
    console.log('runing');
}, 500);

func();
console.log('not run');*/

var Http = require('http');
var server = Http.createServer(function (req, res) {
    res.writeHead(200, {});
    res.end('response');
    badLog('sent response');
    console.log('sent response');
});

server.listen('8080');