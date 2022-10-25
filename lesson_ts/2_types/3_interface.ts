interface User {
  name: string;
  age: number;
  skills: string[];
  log:(id:string)=>string;
}

interface Role {
  id: number;
}

interface UserWithRole extends User,Role{
}

let user: UserWithRole = {
  name:'GrandMather',
  age:81,
  skills: ['h','e','l','l','o'],
  id:1,
  log(str){return "id: "+str;},
}


console.log(user.log("hello"));

  


// Создадим типы которые могут иметь 
// неограниченное количество значение, определенных типов
interface UserDict{
  [index:number]:User
}

type UserDict2 = {
  [index:number]:User
}

type UserDict3 = Record<number,User>