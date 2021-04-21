const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    //password: "12345678"
    database: "userid2"
});

const sql = "CREATE TABLE TestTable(Id INT PRIMARY KEY AUTO_INCREMENT, Age INT, FirstName VARCHAR(20), LastName VARCHAR(20), Job VARCHAR(20), Hobbies VARCHAR(50), Projects VARCHAR(50), Family VARCHAR(50), Relationships VARCHAR(50), Friendliness VARCHAR(10))";
    

connection.query(sql, function(err, results) {
    if(err) console.log(err);
    else console.log ("Table ------ Created");
})


connection.end()