// const Animal = function (name, type) {
//   this.name = name;
//   this.type = type;
// };

// Animal.prototype.toString = function () {
//   return `${this.name} is a ${this.type}`;
// };
// Animal.prototype.type = function () {
//   return this.type;
// };
// Animal.prototype.name = function () {
//   return this.name;
// };
// let dog = new Animal("Rex", "dog");
// console.log(dog.toString());
// dog.name = "Rexy";
// console.log(dog.toString());

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

let dog = new Animal("Rex", "dog");
console.log(dog.toString());
dog.name = "Rexy";
console.log(dog.toString());
