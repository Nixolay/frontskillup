let i = 95;
while ((i++, i < 100)) {
  console.log(i);
}

for (let i = 0, j = 4; i < 5; i++, j--) console.log(i, j);

// fibonacci
let fib = [0, 1];
for (let i = 2; i < 20; fib.push(fib[i - 1] + fib[i - 2]), i++);
console.log("fibonacci:", fib);

// replace
console.log(
  "1 2 3 4 5 6 7 8 9".replace(/[0-9]/g, (num) => (num % 2 ? "*" : num))
);

// void: ограничиваем использование
void (function test() {
  console.log("test void");
})();

// dynamic attribute
let objAttr = "someName";

const user = {
  name: "name",
  [objAttr]: 1,
};
console.log(user);

// &&
const cond = true;
if (cond) {
  console.log("hello");
}
cond && console.log("hello");

// уникальный массив
const arr = [1, 2, 3, 4, 3, 2, 1, 2, 4, 5, 6, 7, 6, 4, 3, 2, 1, 1, 2];
const uniq_arr = [...new Set(arr)];
console.log(uniq_arr);

// labels
out: {
  console.log("print");
  if (true) break out;
  console.log("no print");
}

// filter
console.log([undefined, null, true, 1, 2, 0, ""].filter(Boolean));
console.log([undefined, null, true, 1, 2, 0, ""].map(Number));
console.log("map", ["1", "2", "-122.2", 1, 2, 0, ""].map(Number));
console.log("concat", [].concat(...[1, 2, [3, 4], 6, [7, 8]])); // двумерный в одномерный
console.log(
  "sum",
  [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((a, b) => a + b)
); // суммируем массив

// В разные системы счисления
const N = 11;
console.log(N.toString(2));
console.log(N.toString(8));
console.log(N.toString(16));

// Меняем значения у переменных
let a = 1;
let b = 2;
console.log(a, b);
a = a ^ b;
b = b ^ a;
a = b ^ a;
console.log(a, b);
a = [b, (b = a)][0];
console.log(a, b);
const [c, d] = ["apple", "orange"];
console.log(c, d);
const [code, city, street, home, room] =
  "654040, Krasnodar, lunacharskogo, 12, 25".split(", ");
console.log(code, city, street, home, room);

// Суммируем все элементы в массиве
