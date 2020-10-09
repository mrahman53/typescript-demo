"use strict";
exports.__esModule = true;
var paybycard_1 = require("./paybycard");
var paybycrypto_1 = require("./paybycrypto");
var pay = new paybycard_1.PayByCard();
pay.showPayInfo();
var paymentSystem = new paybycrypto_1.PayByCrypto();
paymentSystem.cryptoPayment("BTC and Etherium");
paymentSystem.display("TRON");
