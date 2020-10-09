 export class ProcessPayment{

      public payment : number;
      public  paymentType :string;

      constructor(payment : number, paymentType : string){
             this.payment = payment;
             this.paymentType = paymentType;
      }
      public getPaymentInfo() : string{
        var message = this.payment + " " + this.paymentType;
        return message;
      }

}

var process = new ProcessPayment(102,"braintree");
var processPayment = process.getPaymentInfo();
console.log(processPayment);
