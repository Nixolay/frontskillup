// Никогда не используйте any, используйте вместо него unknown

let input: unknown;

// Может принимать любой тип
input = 1;
input = ["hello", "world"];

// Но его можно присвоить только к типу any.
let res1: string = input; // нельзя
let res2: any = input; // можно

// Правильное использование
async function getData() {
  try {
    await fetch("error");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

// Не правильное использование
async function getDataForce() {
  try {
    await fetch("error");
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
  }
}

// При создании алиаса типа unknown | любого другого типа, всего будет только unknown
type T1 = unknown | number; // unknown
// При создании алиаса типа unknown & любого другого типа, всего будет идти к сужению типа.
type T2 = unknown | number; // number
