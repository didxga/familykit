/**
 * Created by zwmw5850 on 7/17/2015.
 */
var express = require('express');
var models = require("../model");

/* GET users listing. */
exports.addtrans=function(request, response){
    var moneyTranss = request.param("moneytransaction");
    models.MoneyTrans.create({
        type: moneyTranss.type.bit,
        amount: moneyTranss.amount,
        remark: moneyTranss.remark
    });
    response.render('index');
};

exports.gettrans=function(request, response){
    models.MoneyTrans.findAll().then(function(transList) {
        console.log(transList);
        response.render({trans:transList});
    });
};
