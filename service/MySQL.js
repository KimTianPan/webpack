var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '180.76.159.172',
  user     : 'root',
  password : '123456',
  database : 'kim-test'
});
 
connection.connect();
 
module.exports.connection = connection