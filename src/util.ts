interface Person {
  name: string;
  age: number;
}

export function hiFriday(person: Person) {
  console.log(`hi friday, ${person.name}`);
}
