import { ProcessPayment } from "./process-payment";

export class pay {
  public processPayment : ProcessPayment;
  constructor(processPayment: ProcessPayment) {
    this.processPayment = processPayment;
  }

  showPayInfo(): void{
    var process = new ProcessPayment(300,"levelup");
    console.log(process.getPaymentInfo());
  }
}

var payObj = new pay(new ProcessPayment(1000,"stripe"));
console.log(payObj.showPayInfo());
