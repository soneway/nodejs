var Express = require('express');
console.log(Express);

var app = Express();

app.get('/:id?', function (req, res) {
    if (req.params.id) {
        res.send(req.params.id);
    }
    else {
        res.send('hi');
    }
});

app.listen(8080);