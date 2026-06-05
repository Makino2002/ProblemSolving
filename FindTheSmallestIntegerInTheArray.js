function findSmallestInt(arr) {
  //your code here
  result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (result > arr[i]) {
      result = arr[i];
    }
  }
  return result;
}
// Tham khao
class SmallestIntegerFinder1 {
  findSmallestInt1(args) {
    return Math.min(...args);
  }
}

function noSpace(x) {
  result = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      result += x[i];
    }
  }
  return result;
}
