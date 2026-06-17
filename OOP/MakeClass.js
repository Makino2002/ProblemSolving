function makeClass(...properties) {
  return class {
    constructor(...args) {
      properties.forEach((prop, index) => {
        this[prop] = args[index];
      });
    }
  };
}

makeClass("name", "age", "hobby");
const Person = makeClass("name", "age", "hobby");
const person = new Person("Jane", 22, "coding");
console.log(person.name);
console.log(person.age);
console.log(person.hobby);
