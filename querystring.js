var Url = require('url'),
    Querystring = require('querystring');

var url = 'http://app.gd.sohu.com/minisite/toyota/20150324/put.php?act=share';

var urlParse = Url.parse(url);

console.log(Querystring.parse(urlParse.query));
