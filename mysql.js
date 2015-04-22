var Mysql = require('mysql');

console.log(Mysql);

var connection = Mysql.createConnection({
    user: 'root',
    password: '',
    database: 'nodejs'
});

console.log(connection);

var insertSql='INSERT INTO user VALUES(NULL, "soneway", 28)',
    selectSql='SELECT * FROM user',
    updateSql='UPDATE user SET name="lxying" WHERE ID=2';

connection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }

    //插入一条数据
    connection.query(updateSql, function (err, rs) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(rs);
    });
});