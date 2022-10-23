function getFullName(user: {firstname:string, surname:string}):string{
  return `${user.firstname} ${user.surname}`
};

const user = {
  firstname: "Name",
  surname: "Surname",
  age: 22,
};

console.log(getFullName(user));