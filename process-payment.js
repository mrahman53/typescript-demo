"use strict";
exports.__esModule = true;
exports.ProcessPayment = void 0;
var ProcessPayment = /** @class */ (function () {
    function ProcessPayment(payment, paymentType) {
        this.payment = payment;
        this.paymentType = paymentType;
    }
    ProcessPayment.prototype.getPaymentInfo = function () {
        var message = this.payment + " " + this.paymentType;
        return message;
    };
    return ProcessPayment;
}());
exports.ProcessPayment = ProcessPayment;
var process = new ProcessPayment(102, "braintree");
var processPayment = process.getPaymentInfo();
console.log(processPayment);
