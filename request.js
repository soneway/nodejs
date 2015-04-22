var http = require('http');

var opts = {
    host: 'www.sogou.com',
    port: 80,
    path: '/',
    method: 'GET'
};

/*
var req = http.request(opts, function (res) {
    console.log(res);
    res.on('data', function (data) {
        console.log(data);
    });
});

req.end();*/

/*var req = http.get(opts, function (res) {
    console.log(res);
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });
});*/

var req = http.request({
    host: 'http://app.gd.sohu.com/minisite/toyota/20150324/put.php?act=share',
    method: 'POST'
}, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });
});

req.end();
