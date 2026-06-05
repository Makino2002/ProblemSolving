function decimalToBinary(n) {
  if (n === 0) return "0";
  const isNegative = n < 0;
  n = Math.abs(n);
  let binary = "";
  while (n !== 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  return isNegative ? "-" + binary : binary;
}
function binaryToDecimal(binary) {
  let decimal = 0;
  let power = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    decimal = decimal + binary[i] * Math.pow(2, power);
    power++;
  }
  return decimal;
}

function calculate(n1, n2, o) {
  // your code here
  switch (o) {
    case "add":
      return decimalToBinary(binaryToDecimal(n1) + binaryToDecimal(n2));
      break;
    case "subtract":
      return decimalToBinary(binaryToDecimal(n1) - binaryToDecimal(n2));
      break;
    case "multiply":
      return decimalToBinary(binaryToDecimal(n1) * binaryToDecimal(n2));
      break;
    default:
      return "Invalid operator";
  }
}

console.log(calculate("1", "10", "subtract")); // Output: '-1'

// tham khảo
// function calculate(n1, n2, o) {
//   return {
//     'add'     : function(a,b){ return a+b },
//     'subtract': function(a,b){ return a-b },
//     'multiply': function(a,b){ return a*b }
//   }[o](parseInt(n1,2),parseInt(n2,2)).toString(2)
// }

// function calculate(n1, n2, o) {
//     var a = parseInt(n1, 2),
//         res,
//         b = parseInt(n2, 2);
//     switch (o) {
//         case 'add':
//             res = a + b;
//             break;
//         case 'subtract':
//             res = a - b;
//             break;
//         case 'multiply':
//             res = a * b;
//             break;
//     }
//     return res.toString(2);
// }
