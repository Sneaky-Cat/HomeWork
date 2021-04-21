const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "12345678"
});

connection.query("CREATE DATABASE testDB",
function(err, results) {
    if(err) console.log(err);
    else console.log ("DataBase ------ Created");
})


connection.end()