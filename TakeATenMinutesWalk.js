function isValidWalk(walk) {
  //insert brilliant code here
  if (walk.length !== 10) {
    return false;
  }
  let vertical = 0;
  let horizontal = 0;
  for (let i = 0; i < walk.length; i++) {
    const direction = walk[i];
    switch (direction) {
      case "n":
        vertical += 1;
        break;
      case "s":
        vertical -= 1;
        break;
      case "e":
        horizontal += 1;
        break;
      case "w":
        horizontal -= 1;
        break;
      default:
        return false;
    }
  }
  return vertical === 0 && horizontal === 0;
}
