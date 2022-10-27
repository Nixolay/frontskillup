class Payment {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: number) {
    this.id = id;
    this.createdAt = new Date();
  }

  getPaymentLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }
}

const pay = new Payment(2);
console.log(pay.getPaymentLifeTime());
