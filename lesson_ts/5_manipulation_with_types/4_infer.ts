function runTransaction(tran: { fromTo: [string, string] }) {
  console.log(tran);
}

// Дословно, берем из любой функции первый элемент и получаем его тип в First иначе ничего.
type GetFirstArgType<T> = T extends (first: infer First, ...args: any[]) => any
  ? First
  : never;

const transaction: GetFirstArgType<typeof runTransaction> = {
  fromTo: ["1", "2"],
};
