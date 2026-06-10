function noSpace(x) {
  result = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      result += x[i];
    }
  }
  return result;
}

// tham khao
function noSpace(x) {
  return x.split(" ").join("");
}

// tham khao
function noSpace(x) {
  return x.replace(/\s/g, "");
}

//tham khao
function noSpace(x) {
  return x.replaceAll(" ", "");
}
