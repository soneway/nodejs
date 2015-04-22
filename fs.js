var Fs = require('fs');

Fs.readFile('/Library/WebServer/Documents/nodejs/data.txt', function (error, data) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(data.toString('utf8'));
});
