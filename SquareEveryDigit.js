function squareDigits(n) {
  let result = "";
  while (n > 0) {
    result = (n % 10) ** 2 + result;
    n = Math.floor(n / 10);
  }
  return parseInt(result) || 0;
}

// console.log(squareDigits(0)); // Output: 9414

// tham khao

// function squareDigits(n) {
//   return Number(
//     ("" + n)
//       .split("")
//       .map(function (val) {
//         return val * val;
//       })
//       .join(""),
//   );
// }
