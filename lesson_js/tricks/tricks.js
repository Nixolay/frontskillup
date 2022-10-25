let i = 95
while (i++, i < 100) { console.log(i) }

for (let i = 0, j = 4; i < 5; i++, j--)console.log(i, j)

// fibonacci
let fib = [0, 1]
for (let i = 2; i < 20; fib.push(fib[i - 1] + fib[i - 2]), i++);
console.log("fibonacci:", fib);

// replace
console.log('1 2 3 4 5 6 7 8 9'.replace(/[0-9]/g, num => num % 2 ? '*' : num));

// void: ограничиваем использование
void function test() { console.log("test void"); }()