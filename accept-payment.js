"use strict";
exports.__esModule = true;
exports.pay = void 0;
var process_payment_1 = require("./process-payment");
var pay = /** @class */ (function () {
    function pay(processPayment) {
        this.processPayment = processPayment;
    }
    pay.prototype.showPayInfo = function () {
        var process = new process_payment_1.ProcessPayment(300, "levelup");
        console.log(process.getPaymentInfo());
    };
    return pay;
}());
exports.pay = pay;
var payObj = new pay(new process_payment_1.ProcessPayment(1000, "stripe"));
console.log(payObj.showPayInfo());
