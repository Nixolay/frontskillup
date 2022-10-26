const skills: string[] = ["dev", "devops", "ts"];

for (const skill of skills) {
  console.log(skill);
}

const res = skills
  .filter((s: string) => s !== "devops")
  .map((s) => s + "! ")
  .reduce((a, b) => a + b);

console.log(res);
