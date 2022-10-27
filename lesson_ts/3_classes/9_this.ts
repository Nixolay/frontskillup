class Payment {
  private date: Date = new Date();

  getDate(this: Payment) {
    return this.date;
  }

  getDateArrow = () => {
    return this.date;
  };
}

const p = new Payment();

const user = {
  id: 1,
  payDate: p.getDate.bind(p), // bind нужен что бы сохранить контекст, иначе мы не получим значение
  arrowDate: p.getDateArrow,
};
console.log(p.getDate());
console.log(user.payDate());
console.log(user.arrowDate());

class PaymentPersistent extends Payment {
  save() {
    return super.getDate();
    // не будет работать со стрелочной функцией
    //return super.getDateArrow() // тут программа упадет
  }
}

// THIS type необходим для правильно определения типа
class UserBuilder {
  name: string;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder;
  }
}

class AdminBuilder extends UserBuilder {
  roles: string[]; // всегда должен иметь отличные поля от супера, иначе это будет одно и тоже
}

let user: UserBuilder | AdminBuilder = new AdminBuilder();
if (user.isAdmin()) {
  console.log("admin");
} else {
  console.log("user");
}
