/*
 * Inside `burger.js`, import `orm.js` into `burger.js`
 * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
 * Export at the end of the `burger.js` file.
 */

var orm = require("../config/orm.js");
var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(data) {
            cb(data);
        });
    },

    insertOne: function(col, burger_name, cb) {
        orm.insertOne('burgers', col, burger_name, function(data) {
            cb(data);
        });
    },

    updateOne: function(col, burger_id, cb) {
        orm.updateOne('burgers', col, burger_id, function(data) {
            cb(data);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;