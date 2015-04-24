var Mysql = require('mysql');

var db = Mysql.createConnection({
    user: 'root',
    passworld: '',
    database: 'nodejs'
});


//打开连接
db.connect(function (err) {
    if (err) {
        throw 'connect' + err;
    }
});

//db.query('SET NAMES "utf8"');

//插入
db.query({
    sql: 'INSERT INTO user VALUES(?, ?, ?)',
    values: [null, '呵呵呵', 28]
}, function (err, rs) {
    if (err) {
        throw 'insert' + err;
    }
    console.log(rs);
});

//更新
db.query({
    sql: 'UPDATE user SET name=? WHERE id=?',
    values: ['宋均均', 1]
}, function (err, rs) {
    if (err) {
        throw 'update' + err;
    }
    console.log(rs);
});



//查询
db.query({
    sql: 'SELECT * FROM user'
}, function (err, rs, fields) {
    if (err) {
        throw 'select' + err;
    }
    console.log(rs);
});


//查询(用??来placehold字段,表名等)
db.query({
    sql: 'SELECT ?? FROM ??',
    values: [
        ['id', 'name'],
        'user'
    ]
}, function (err, rs) {
    if (err) {
        throw 'select' + err;
    }
    console.log(rs);
});

//更新
db.query({
        sql: 'UPDATE user SET ? WHERE id=?',
        values: [
            {
                name: '恩恩恩'
            },
            3
        ]
    },
    function (err, rs) {
        if (err) {
            throw 'update' + err;
        }
        console.log(rs);
    });


//关闭连接
db.end();