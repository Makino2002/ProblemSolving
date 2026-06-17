// test
// var c = new Counter();
// c.incr(); // counter is now at 1
// c + 1; // 2
// c > 1; // false
// c > 0; // true
// c == 1; // true
// Math.sqrt(c); // 1

// function Counter() {
//   this.checker = 0;
//   return this.checker;
// }

// Counter.prototype.incr = function () {
//   this.increment = function () {
//     this.checker++;
//     return "checker: " + this.checker;
//   };
//   return this.increment();
// };
// Counter.prototype.valueOf = function () {
//   return this.checker;
// };
// let c = new Counter(); // -> done
// console.log("1", c.incr()); //-> done
// console.log("2", c.checker); //-> done
// console.log("3", c + 1); // 2   -> done

// c.incr(); // counter is now at 1
// console.log(c + 1); // 2
// console.log(c > 1); // false
// console.log(c > 0); // true
// console.log(c == 1); // true
// console.log(Math.sqrt(c)); // 1

// best practice
let Counter = function () {
  this.checker = 0;
  this.incr = function () {
    this.checker++;
    return "checker: " + this.checker;
  };
  this.valueOf = function () {
    return this.checker;
  };
};
