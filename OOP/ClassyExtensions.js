class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    return `${this.name} meows.`;
  }
}
