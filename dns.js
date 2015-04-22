var Dns = require('dns');

Dns.resolve('sohu.com', 'MX', function (er, res) {
    if (er) {
        console.log(er);
        return;
    }
    console.log(res);
});