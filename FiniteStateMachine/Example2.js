// // ktra chuỗi nhị phân có chia hết cho 5 không
// 5   = 101
// 10  = 1010
// 15  = 1111
// 20  = 10100
// 25  = 11001
// 30  = 11110
// 35  = 100011
// 40  = 101000
// 45  = 101101
// 50  = 110010
let loop_4 = `(1*)`;
let trans_23 = `(0${loop_4}0)`;
let loop_2 = `((${trans_23}(1|00))*)`;
let trans_13 = `((0${loop_2}${trans_23})|1)`;
let loop_1 = `((${trans_13}0)*)`;
let trans_12 = `(0|11)`;

let loop_0 = `(0|(1${loop_1}${trans_12}${loop_2}1))`;

let pattern = `${loop_0}+`;

const divisibleByFive = new RegExp(`^${pattern}$`);
const test1 = "1010";
const test2 = "1011";
console.log(divisibleByFive.test(test1)); // true
console.log(divisibleByFive.test(test2)); // false
