var mysql = require('mysql');
var app = require('./app');
var port = '3700';

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "propio_testwbi"
});

con.connect(function(err) {
    if (err) throw err;
    

    app.listen(port, () => {
       
    });
    /*
    var sql = "SELECT * FROM products";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.table(result);
      });
      */
});