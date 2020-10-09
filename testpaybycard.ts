import{PayByCard} from "./paybycard";
import{PayByCrypto} from "./paybycrypto";

let pay = new PayByCard();
pay.showPayInfo();
let paymentSystem = new PayByCrypto();
paymentSystem.cryptoPayment("BTC and Etherium");
paymentSystem.display("TRON");
