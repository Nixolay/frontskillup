class User {
  name: string;
  age: number;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  constructor(nameOrAge?: string | number, age?: number) {
    switch (typeof nameOrAge) {
      case "string":
        this.name = nameOrAge;
        break;
      case "number":
        this.age = nameOrAge;
        break;
    }

    if (typeof age === "number") {
      this.age = age;
    }
  }
}

const user: User = new User("Vasya");
