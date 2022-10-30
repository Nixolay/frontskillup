function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

interface Data {
  group: number;
  name: string;
}

const data: Data[] = [
  { group: 1, name: "a" },
  { group: 2, name: "b" },
  { group: 1, name: "c" },
  { group: 2, name: "d" },
  { group: 2, name: "e" },
];

interface IGroup<T> {
  [key: string]: T[];
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(
  array: T[],
  key: keyof T
): IGroup<T> {
  return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key];
    let curEl = map[itemKey];
    if (Array.isArray(curEl)) {
      curEl.push(item);
    } else {
      curEl = [item];
    }
    map[itemKey] = curEl;
    return map;
  }, {});
}

console.log(group<Data>(data, "group"));
