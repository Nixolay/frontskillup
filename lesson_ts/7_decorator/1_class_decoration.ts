interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

// Декораторы инициализация в том порядке в котором они объявлены а исполнение в обратном

// отработает отрабатывает до присвоения дефолтных значений и конструктора
@setUsers(10)
@nullUser
// умеет задавать значение после того как отработает конструктор
@setUserAdvanced(111)
@treeUserAdvanced
class UserService implements IUserService {
  users: number = 1000;
  constructor(users: number) {
    this.users = users;
  }
  getUsersInDatabase(): number {
    return this.users;
  }
  setUsersInDatabase() {
    throw new Error("Error");
  }
}

function nullUser(target: Function) {
  target.prototype.users = 0;
}

function setUsers(users: number) {
  return (target: Function) => {
    target.prototype.users = users;
  };
}

function treeUserAdvanced<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    users = 3;
  };
}

function setUserAdvanced(users: number) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      users = users;
    };
  };
}
console.log(new UserService(10).getUsersInDatabase());
