class UserService {
  static name: string; // нельзя задавать дефолтное значениеми         авввввввкс
  private static db: any;

  constructor(id: number) {}

  static getUser(id: number) {
    return UserService.db.findByID(id);
  }

  create() {
    UserService.db;
  }

  static {
    UserService.db = "sdf";
  }
}

UserService.getUser(1); // static method
const us = new UserService(1);
us.create();
