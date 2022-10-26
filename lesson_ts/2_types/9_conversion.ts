let a: number = 5;
let as: string = a.toString();
let as2: string = mew String(a).valueOf();
let ab: boolean = mew Boolean(a).valueOf();

let b = 'asd';
let bn: number = +b;
let bn2: number = parseInt(b);

// -------------------------------------
interface User {
  name: string;
  email: string;
  login: string;
}

const user = {
  name: 'Vasya',
  email: 'vasya@vs.sv',
  login:'vasisdas'
} as User

const user2: User = {
  name: 'Vasya',
  email: 'vasya@vs.sv',
  login:'vasisdas'
}

interface Admin {
  name: string;
  role: number;
}

// правильное преобразование
function user2admin(user:User):Admin {
  return {
    name: user.name,
    role: 1
  }
}

// Не правильное преобразование
const admin: Admin = {
  ...user,
  role: 1
}