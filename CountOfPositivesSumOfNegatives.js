function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  // your code here
  let count = 0;
  let sumNegatives = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count++;
    } else if (input[i] < 0) {
      sumNegatives += input[i];
    }
  }
  return [count, sumNegatives];
}

console.log(countPositivesSumNegatives(null)); // [3, -6]
