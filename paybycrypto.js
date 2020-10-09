"use strict";
exports.__esModule = true;
exports.PayByCrypto = void 0;
var PayByCrypto = /** @class */ (function () {
    function PayByCrypto() {
    }
    PayByCrypto.prototype.cryptoPayment = function (paymentMethod) {
        console.log(paymentMethod);
    };
    PayByCrypto.prototype.display = function (message) {
        console.log(message);
    };
    return PayByCrypto;
}());
exports.PayByCrypto = PayByCrypto;
