// bước 1: khai báo 1 mảng rổng -> dùng set
// bước 2: lưu những số chia hết cho 3 và vào mảng sao cho nho hơn number
// bước 3 tính tổng của set
function solution(number) {
  let set = new Set();
  let i = 0;
  let j = 0;
  while (i < number || j < number) {
    if (i < number) {
      set.add(i);
      i += 3;
    }
    if (j < number) {
      set.add(j);
      j += 5;
    }
  }
  let sum = 0;
  for (let num of set) {
    sum += num;
  }
  return sum;
}
// tham khảo
function solution1(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

// Tối ưu hơn nữa

function sumDivisibleBy(k, n) {
  n = Math.floor((n - 1) / k);
  return (k * (n * n + n)) / 2;
}

function solution2(number) {
  if (number < 0) return 0;
  return (
    sumDivisibleBy(3, number) +
    sumDivisibleBy(5, number) -
    sumDivisibleBy(15, number)
  );
}

console.log(solution2(-98));
