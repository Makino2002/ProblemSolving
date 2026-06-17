// const {assert} = require('chai');

// describe("Tests", () => {
//   it("example tests", () => {
//     const counter = new Counter;
//     assert.isFunction( counter.check, `method Counter.check` );
//     assert.isFunction( counter.increment, `method Counter.increment` );
//     counter.increment();
//     counter.increment();
//     assert.strictEqual( counter.check(), 2 );
//   });
// });const {assert} = require('chai');

// describe("Tests", () => {
//   it("example tests", () => {
//     const counter = new Counter;
//     assert.isFunction( counter.check, `method Counter.check` );
//     assert.isFunction( counter.increment, `method Counter.increment` );
//     counter.increment();
//     counter.increment();
//     assert.strictEqual( counter.check(), 2 );
//   });
// });

// cach 1: pass 90%
function Counter() {
  this.Counter = 0;
  this.increment = function () {
    this.Counter++;
  };
  this.check = function () {
    return this.Counter;
  };
}

// cach 2: pass 100%

function Counter() {
  let count = 0; //-> this variable is private to the Counter function and cannot be accessed from outside the function.
  this.increment = function () {
    count++;
  };
  this.check = function () {
    return count;
  };
}
