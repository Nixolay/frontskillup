// strictPropertyInitialization следит за инициализацией параметров класса

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const user: User = new User("Vasya");
console.log(user);
user.name = "AllEgg";
console.log(user);

class Admin {
  // role!: number;
  role: number;
}

const admin = new Admin();
admin.role = 1;
console.log(admin);
