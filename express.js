var Express = require('express');

var app = Express();

/*
app.get('/:id?', function (req, res) {
    if (req.params.id) {
        res.send(req.params.id);
    }
    else {
        res.send('hi');
    }
});*/

//app.use(Express.limit('1mb'));
//app.use(Express.bodyParser());
//app.use(Express.methodOverride());

app.get('/', function (req, res) {
    res.send('<form method="post" action="/"><input type="text" name="username"/><input type="submit" value="ok"/></form>');
});

app.request('/', function (req, res) {
    res.send('你好: ' + req.body.username);
});


app.listen(8080);