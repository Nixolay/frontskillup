type PaymentStatus = "new" | "paid";

class Payment {
  id: number;
  status: PaymentStatus = "new";

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = "paid";
  }
}

class PersistentPayment extends Payment {
  databaseID: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id); //  вызов конструктора родителя
  }

  // при переопределении метода, мы должны учитывать, метод родителя
  // override что бы перезаписать метод
  pay(date?: Date) {
    super.pay();
    if (date) {
      this.paidAt = date;
    }
  }
}
