'use strict';
var Reflux = require('reflux');
var request = require('superagent');

var FinAction = Reflux.createActions([
    "load",             //called when entering the page
    "completeTodo",     //called when ticking checkbox
    "transferMoney",
    "getTransfer",
    "removeTodo",       //called when click the Trash icon
    "completeAll",      //called when clicking link in footer
    "resortList"        //called when dropping a list item
]);

FinAction.transferMoney.preEmit = function (moneytransaction) {
    request.post('/money/addtrans/', {moneytransaction: moneytransaction}, function () {});
};

FinAction.getTransfer.preEmit = function(cb) {
    request.get("/money/gettrans/", function(response){
        var result = JSON.parse(response.text);
        cb(result.trans);
    });
};

FinAction.removeTodo.preEmit = function (id) {
    request.del('/money/'+id+'/', function () {});
};

FinAction.completeTodo.preEmit = function (id) {
    request.put('/money/'+id+'/', {"is_checked": true}, function () {});
};

FinAction.completeAll.preEmit = function() {
    request.put('/money/check-all/', function () {});
};

module.exports = FinAction;
