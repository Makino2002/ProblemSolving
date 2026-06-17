// stask1: intput: true -> output: "true"
// stask1: intput: false -> output: "false"
// stask2: intput: 1 -> output: "1"
// stask2: intput: 0 -> output: "0"

// stask3: intput: [1] -> output: "[1]"
// stask3: intput: [0] -> output: "[0]"
// Recover toString() here :)
// The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() for the following data types.

// code here
Boolean.prototype.toString = function () {
  return this.valueOf() ? "true" : "false";
};
Number.prototype.toString = function () {
  return String(this.valueOf());
};
Array.prototype.toString = function () {
  return JSON.stringify(this.valueOf());
};
Object.prototype.toString = function () {
  return JSON.stringify(this.valueOf());
};
