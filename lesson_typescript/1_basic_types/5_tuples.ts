// Тюпл - это массив, который мы ограничивает длинной и указываем,
// каким типом должны быть его элементы
const skill: [string,number|string] = ['dev', 3];
const skillInfo: [number,string,...boolean[]] = [1,'devops',true,false,false];
const skillName = skill[0];
const skillValue = skill[1];
//const skillUndefined = skill[2] // подсвечивается, так как при инициализации мы указали что там два элемента.

console.log(skill)

skill.push('можем доббавить но при получении, все равно будет ругаться');
// const skillUndefined2 = skill[2]
skill.pop();
// console.log(skill.?hello.?world)