var connectionName = '127.0.0.1';
var user = 'root';
var userPwd = '12345678';
var db = 'userid2';

var dbUrl = 'jdbc:google:mysql://' + connectionName + '/' + db;

function writeManyRecords() {
  var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
  conn.setAutoCommit(false);

  var start = new Date();
  var stmt = conn.prepareStatement('INSERT INTO testtable '
      + '(Age, FirstName, LastName, Job, Hobbies, Projects, Family, Relationships, Friendliness) values (?, ?)');
  for (var i = 0; i < 500; i++) {
    stmt.setString(i, 'FirstName ' + i, i+1, i+2, i+3, i+4, i+5, i+6, i+7);
    stmt.setString(i, 'FirstName ' + i+1, i+1, i+2, i+3, i+4, i+5, i+6, i+7);
    stmt.addBatch();
  }

  var batch = stmt.executeBatch();
  conn.commit();
  conn.close();

  var end = new Date();
  Logger.log('Time elapsed: %sms for %s rows.', end - start, batch.length);
}
