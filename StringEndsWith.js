console.log("ab" === "ab");

function solution(str, ending) {
  // TODO: complete
  if (ending.length === 0) {
    return true;
  }
  if (str.length < ending.length) {
    return false;
  }

  //   cat chuoi str tu vi tri str.length - ending.length den het chuoi
  return str.substring(str.length - ending.length) === ending;
}

// thm khao
function solution(str, ending) {
  return str.endsWith(ending);
}
