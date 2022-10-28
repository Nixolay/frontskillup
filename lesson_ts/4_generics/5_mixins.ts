type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any) => T;

class List {
  constructor(public item: string[]) {}
}
class Accordion {
  isOpened: boolean;
}

type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;

class ExtendedListClass extends List {
  first() {
    return this.item[0];
  }
}

// mixin: дает полный контроль с миксованных типов и доступ к им полям.
function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
  return class ExtendedList extends Base {
    first() {
      return this.item[0];
    }
  };
}

class AccordionList {
  isOpened: boolean = false;
  constructor(public item: string[]) {}
}

const list = ExtendedList(AccordionList);
const res = new list(["first", "second", "third"]);
console.log(res.first(), res.isOpened);
