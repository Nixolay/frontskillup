type Skills = string[];
type User = {
  name: string;
  age: number;
  skills: Skills;
};

type Role = {
  id: number;
};

type Method = "post" | "get"; // Делаем выбор из типов
type UserWithRole = User & Role; // Объединяем два типа

let user: UserWithRole = {
  name: "GrandMather",
  age: 81,
  skills: ["h", "e", "l", "l", "o"],
  id: 1,
};

console.log(user);
