function duplicateEncode(word) {
  // ...
  let result = "";
  let tmp = {};
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    tmp[word[i]] = (tmp[word[i]] || 0) + 1;
  }
  for (let i = 0; i < word.length; i++) {
    result += tmp[word[i]] === 1 ? "(" : ")";
  }
  return result;
}

// Tham khao
function duplicateEncode1(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
