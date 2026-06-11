class Person {
  constructor(name = "", year = 0) {
    this.name = name;
    this.year = year;
    this.info = `${this.name}s age is ${this.year}`;
  }
}
