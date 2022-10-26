function multiply(a: number = 1, b?: number) {
  if (!b) {
    return a * a;
  }
  return a * b;
}

interface User {
  login: string;
  password?: {
    type: "primary" | "secondary";
  };
}

function testPass(user: User) {
  // const p = user.password ? user.password.type : undefined
  const p = user.password?.type;
  // const p = user.password!.type утверждаем существование параметра

  // если password (null|undefined) тогда вычисляем
  const res = user.password ?? multiply(5);
}
