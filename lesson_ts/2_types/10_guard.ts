interface User {
  name: string;
  email: string;
  login: string;
}

interface Admin {
  name: string;
  role: number;
}

function isString(x: string | number): x is string {
  return typeof x === "string";
}

function isAdmin(user: User | Admin): user is Admin {
  return "role" in user;
}

function isAdmin2(user: User | Admin): user is Admin {
  return (user as Admin).role !== undefined;
}

function setRoleZero(user: User | Admin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error("User is no admin");
  }
}
