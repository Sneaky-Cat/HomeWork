const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    //password: "12345678"
    database: "userid2"
});

const sql = "DROP TABLE users";
    

connection.query(sql, function(err, results) {
    if(err) console.log(err);
    else console.log ("Table ------ Deleted");
})


connection.end()