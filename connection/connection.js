var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'qrca',
    password: '@rc4D414',
    database: 'CRONJOBS'
    
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;