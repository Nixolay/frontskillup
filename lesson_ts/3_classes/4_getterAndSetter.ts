class User {
  _login: string;
  password: string;
  createAt: Date;

  // sync
  set login(l: string | number) {
    this._login = `user-${l}`;
    this.createAt = new Date();
  }

  get login() {
    return this._login;
  }

  async setPassword(pass: string) {
    this.password = pass;
  }
}

const user = new User();
user.login = "test";
console.log(user);
console.log(user.login);
