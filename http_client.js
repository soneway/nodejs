var http = require('http');

var req = http.request({
    hostname: 'localhost',
    port: 8080,
    path: '/',
    method: 'get'
}, function (res) {
    console.log(res);

    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log('data: ' + data);
    });
});

req.end();