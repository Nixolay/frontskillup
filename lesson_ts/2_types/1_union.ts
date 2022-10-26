function Log(v: number | string | boolean) {
  switch (typeof v) {
    case "string":
      console.log(v.toLowerCase());
      break;
    default:
      console.log(v);
      break;
  }
}
Log("Hello World!");
Log(1);

function LogError(err: string | string[]) {
  if (Array.isArray(err)) {
    err.forEach((e) => console.log(e));
  } else {
    console.log(err);
  }
}
LogError(["hello", "world"]);
LogError("MyError");

function LogObj(obj: { a: number } | { b: number }) {
  if ("a" in obj) {
    console.log("obj.a", obj.a);
  } else {
    console.log("obj.b", obj.b);
  }
}
LogObj({ a: 2 });

function LogMulti(a: string | number, b: string | boolean) {
  if (a === b) {
    console.log(a + b);
  } else {
    console.log(a, b);
  }
}
LogMulti("hello", "world");
LogMulti("hello", "hello");
