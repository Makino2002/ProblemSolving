function lovefunc(flower1, flower2) {
  // moment of truth
  return Boolean(
    (flower1 % 2 === 0) & (flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0) & (flower2 % 2 === 0),
  );
}

// tham khao
function lovefunc1(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
