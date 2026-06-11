const circular = {
  value: "Hello World",
};

circular.self = circular;
console.log(circular);
console.log(circular.self);
console.log(circular.self.self);
