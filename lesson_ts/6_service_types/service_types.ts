class User {
  age?: number;
  email: string;

  constructor(public id: number, public name: string);
}

// Все поля сделаем не обязательными
type partitial = Partial<User>;
// Все поля сделаем обязательными
type required = Required<User>;
type readonly = Readonly<User>;
// Для нескольких полей
type requiredAndReadonly = Required<Readonly<User>>;

// -----------------------------------
// Убираем атрибут age из объекта User
type omit = Omit<User, "age">;
// Только определенные поля берем
type pick = Pick<User, "email" | "name">;

// Вытащить только то что является строкой
type ExtractEx = Extract<"id" | "name" | omit, string>;
// Исключаем все что строка
type ExcludeEx = Exclude<"id" | "name" | omit, string>;

function getData(id: number): User {
  return new User(id, "Vasa");
}

// Получить тип, возвращаемого типа из функции
type RT = ReturnType(typeof getData)
// Получить тип первого входного параметра
type PT = Parameters(typeof getData)[0]
type CP = ConstructorParameters<typeof User>

// ---- Awaited
// Разворачивает цепочку зависимостей что бы получить тип
type TA = Awaited<Promise<Promise<string>>>

// Awaited example:
interface IMenu{
  name: string;
  url: string;
}

async function getMenu():Promise<IMenu[]> {
  return [{name:'Analytic',url:'analytics'}]
}

type R = Awaited<ReturnType<typeof getMenu>>

async function getArray<T>(x:T):Promise<Awaited<T>[]> {
  return [await x];
}