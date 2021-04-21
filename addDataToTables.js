const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    //password: "12345678"
    database: "userid2"
});

const sql = "INSERT INTO TestTable(Age, FirstName, LastName, Job, Hobbies, Projects, Family, Relationships, Friendliness) VALUES(24, 'John', 'Paddington', 'Doctor', 'Photo processing', 'Doctoral degree in psychology', 'Dog and cat', 'Mary, Age: 22', 'true')";
    

connection.query(sql, function(err, results) {
    if(err) console.log(err);
    else console.log ("Table ------ Updated");
})


connection.end()