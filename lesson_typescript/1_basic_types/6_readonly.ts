const skills: readonly string[] = ['dev', 'devops', 'ts'];
const skills2: ReadonlyArray<string> = ['dev', 'devops', 'ts'];
const skill: readonly [string,number|string] = ['dev', 3];


skills[1] = "hello";
skills2[1] = "hello";
skill[0] = "hello";
skills.push("hello")