// cách 1
const person = {
  firstName: "Jane",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
// cách 2:
const person2 = {
  firstName: "Jane",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    Object.assign(this, { firstName, lastName });
  },
};

// cach 3: getting and setting
const person3 = {
  firstName: "Jane",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

// test
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
person.firstName = "John";
console.log(person.fullName);
person.lastName = "Anderson";
console.log(person.fullName);
person.lastName = "Donald";
console.log(person.fullName);
person.fullName = "Oliver Crawford";
console.log(person.firstName);
console.log(person.lastName);
person.fullName = "Andre Baghurst";
console.log(person.fullName);
console.log(person.lastName);
