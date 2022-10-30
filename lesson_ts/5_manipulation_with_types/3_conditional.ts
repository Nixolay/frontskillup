class User {
  id: number;
  name: string;
}

class UserPersistent extends User {
  dbID: string;
}

function getUser(dbID: string): UserPersistent;
function getUser(ID: number): User;
function getUser(dbIDOrID: string | number): User | UserPersistent {
  if (typeof dbIDOrID === "number") {
    return new User();
  }

  return new UserPersistent();
}

// вместо салянки которую мы написал вверху, можно типизировать.
type UserOrUserPersistent<T extends string | number> = T extends number
  ? User
  : UserPersistent;

function getUser2<T extends string | number>(id: T): UserOrUserPersistent<T> {
  if (typeof id === "number") {
    // так как мы возвращаем из функции UserOrUserPersistent<T>
    // нам нужно явно указать что мы возвращаем этот тип
    return new User() as UserOrUserPersistent<T>;
  }

  return new UserPersistent() as UserOrUserPersistent<T>;
}

const r1 = getUser2(1);
const r2 = getUser2("2");
