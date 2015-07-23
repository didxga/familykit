/**
 * Created by zwmw5850 on 7/18/2015.
 */
"use strict";
module.exports = function(sequelize, DataTypes) {
    var MoneyTrans = sequelize.define("MoneyTrans", {
        type: DataTypes.CHAR,
        amount: DataTypes.DOUBLE,
        remark: DataTypes.STRING
    }, {
        classMethods: {
            //associate: function(models) {
            //    User.hasMany(models.Task)
            //}
        }
    });
    MoneyTrans.sync({force: true}).then(function () {
        // Table created
    });
    return MoneyTrans;
};
