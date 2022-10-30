let strOrNum: string | number;
let strOrNumber: typeof strOrNum; // берем тип из переменной

interface Permission {
  endDate: Date;
}

interface User {
  name: string;
  roles: string[];
  permission: Permission;
}

const user: User = {
  name: "Vasya",
  roles: ["admin"],
  permission: {
    endDate: new Date(),
  },
};

type keyOfUser = keyof typeof user; // тип как один из ключей user(a)

enum Direction {
  Up,
  Down,
}

type d = keyof typeof Direction; // тип как один из ключей Direction(a)

const roleName = "roles";

type roleType = User["roles"];
// type roleType2 = User[roleName]; //  не является типом
type roleType2 = User[typeof roleName];

const roles = ["admin", "user", "sudo"] as const;
type roleTypes = typeof roles[number];

// что-бы получить доступ к вложенным полям объектов можем пользоваться типами
type roleUserType = User[typeof roleName][number];
type dateUserType = User["permission"]["endDate"];
