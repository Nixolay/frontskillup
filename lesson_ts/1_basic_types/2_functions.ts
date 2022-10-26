function getFullName(firstname: string, surname: string): string {
  return `${firstname} ${surname}`;
}

const getFullNameArrow = (firstname: string, surname: string): string => {
  return `${firstname} ${surname}`;
};

function getFullNameJS(firstname, surname) {
  if (typeof firstname !== "string" || typeof surname !== "string") {
    throw new Error("function parameters is not string");
  }

  return `${firstname} ${surname}`;
}
