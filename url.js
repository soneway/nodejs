var Url = require('url');

var url = 'http://app.gd.sohu.com/minisite/toyota/20150324/put.php?act=share';

var urlParse = Url.parse(url);

console.log(urlParse);
