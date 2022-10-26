// never: когда функция никогда не вернет значение
function dumpError(): never {
  while (true) {}
}

function generateError(message: string): never {
  throw new Error(message);
}

function rec(): never {
  return rec();
}

const a: void = undefined; // возможно присвоить
const b: never = undefined; // не возможно присвоить

// --------------------------------------------
type paymentAction = "refund" | "checkout" | "reject";

function processAction(action: paymentAction) {
  switch (action) {
    case "refund":
      // ...
      break;
    case "checkout":
      // ...
      break;
    default:
      // так мы можем проверить что в коде у нас правильно и мы сюда не попадем.
      const _: never = action;
      throw new Error(`Action: ${action}, not found`);
  }
}

function isString(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }
  generateError("unknown type");
}
