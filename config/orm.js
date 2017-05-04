/*
   * Import (require) `connection.js` into `orm.js`

   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. 
   * These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()` 
     * `insertOne()` 
     * `updateOne()` 

   * Export the ORM object in `module.exports`.
*/
var connection = require("./connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();
}

var orm = {
    selectAll: function(table, cb) {
        connection.query("SELECT * FROM " + table, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function(table, col_name, burger_name, cb) {
        connection.query("INSERT INTO " + table + "(" + col_name + ")" + "VALUES (?)", [burger_name], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: function(table, col_name, burger_id, cb) {
        connection.query("UPDATE " + table + " SET " + col_name + "=1 " + "WHERE id=" + burger_id, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    }

};

module.exports = orm;