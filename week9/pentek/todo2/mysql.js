var mysql = require('mysql')

var connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'test2',
  password  : 'test',
  database  : 'todo'
});

function addItem(attributes, cb) {
  //console.log('most adja at a mysqlnek');
  connection.query('INSERT INTO todo SET ?', attributes, function(err, result) {
    //console.log('most kuldi vissza a');
    if (err) throw err;
      return getItem(result.insertId, cb);
  });
}

function getItem(id, cb) {
  //console.log('haligali' + id);
  connection.query('SELECT todo_id, status, text FROM todo WHERE todo_id=?', id, function (err, results) {
    if (err) throw err;
      console.log('itta results :' + results);
      return cb(results[0]);
  });
}


function getAllItems(cb) {
  connection.query('SELECT todo_id, status, text FROM todo', function(err, results) {
    if (err) throw err;
      return cb(results);
  });
}


module.exports = {
  add : addItem,
  getAll : getAllItems,
  get : getItem
}

