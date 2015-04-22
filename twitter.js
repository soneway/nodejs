var express = require('express');

var app = express.createServer();
app.listen(8000);

var tweets = [];

app.get('/', function (req, res) {
    res.send('Welcome');
});

app.post('/send', express.bodyParser(), function (req, res) {
    if (req.body && req.body.tweet) {
        tweets.push(req.body.tweet);
        res.send({
            status: 'ok',
            message: 'Tweet OK'
        });
    }
    else {
        res.send({
            status: 'no',
            message: 'Tweet NO'
        });
    }
});

app.get('/tweets', function (req, res) {
    res.send(tweets);
});