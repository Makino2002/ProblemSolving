// ktra chuỗi nhị phân có bắt đầu bằng số 0 hay không
// dùng FSM và Regular để giải quyết bài toán này
const FMS = /^0/;

const test1 = "0110101";
const test2 = "1101010";
console.log(FMS.test(test1)); // true
console.log(FMS.test(test2)); // false
