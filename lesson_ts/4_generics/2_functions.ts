// T: может нести не только имя T но и любое другое,
// которое вам будет удобно.
// Через ровно можно задать значение по умолчанию.
function logMiddleware<T = string>(data: T): T {
  console.log(data);
  return data;
}

const res = logMiddleware<number>(10);

function getSplitterHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, l);
}

getSplitterHalf<number>([1, 2, 3]);

//----------------------------------------------------
class Vehicle {
  run: number;
}

function kmToMiles<T extends Vehicle>(p: T): T {
  p.run /= 0.62;
  return p;
}

const v = new Vehicle();
v.run = 1000;

console.log(kmToMiles(v).run);

function logData<T extends string | number, Y>(
  id: T,
  data: Y
): { id: T; data: Y } {
  console.log(id);
  console.log(data);

  return { id, data };
}

//----------------------------------------------------
interface ID {
  id: number;
}

function sort<T extends ID>(data: T[], type: "asc" | "desc" = "asc"): T[] {
  return data.sort((a, b) => {
    switch (type) {
      case "asc":
        return a.id - b.id;
      case "desc":
        return b.id - a.id;
    }
  });
}

const data = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 4, name: "d" },
  { id: 5, name: "e" },
];

console.log(sort(data));
console.log(sort(data, "desc"));
