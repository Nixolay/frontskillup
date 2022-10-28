function toString<T>(data: T): string | undefined {
  // if (data) {
  //   return `${data}`;
  // }

  if (Array.isArray(data)) {
    return data.toString();
  }
  switch (typeof data) {
    case "string":
      return data;
    case "object":
      return JSON.stringify(data);
    case "number":
    case "symbol":
    case "bigint":
    case "boolean":
    case "function":
      return data.toString();
  }

  return undefined;
}

console.log(toString(undefined));
console.log(toString(null));
console.log(toString(0));
console.log(toString(1));
console.log(toString(""));
console.log(toString("Hello world!"));
console.log(toString({ var: "Hello world!" }));
console.log(toString([1, 2, 3]));
console.log(toString(() => "hello"));
