function AI(game) {
  while (true) {
    const info = game.inspectTG();
    if (typeof info !== "object") return;
    const goal = info.objects[0];
    const center = (goal.location[0] + goal.location[1]) / 2;
    const key = center > 0 ? ">" : "<";
    const time = Math.abs(center) / 10;
    const result = game.press(`${key}${time}X1`);
    if (result === "All Cleared!" || result === "Game Over!") {
      return;
    }
  }
}
