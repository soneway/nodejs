var Mongodb = require('mongodb');

var host = 'localhost',
    port = Mongodb.Connection.DEFAULT_PORT,
    db = new Mongodb.Db('mongo_test', new mongo.Server(host, port, {}), {});

db.open(function (err, db) {
    db.collection('users', function (err, collection) {
        if (err) {
            console.log(err);
            return;
        }

        collection.insert({
            username: 'song',
            age: 28
        }, function (err, docs) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(docs);
            db.close();
        });
    });
});
