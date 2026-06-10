class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  validate() {
    if (this.lives <= 0) {
      throw new Error("already dead");
    }
  }
  setLive(l) {
    this.lives = l;
  }
  guess(n) {
    this.validate();
    if (n === this.number) {
      return true;
    }
    this.setLive(this.lives - 1);
    return false;
  }
}
// 10 2 đè xuất
// 10 1
//
const guesser = new Guesser(10, 2);
console.log(guesser.guess(1)); // false 1 10
console.log(guesser.guess(2)); // false 0 10
console.log(guesser.guess(10)); //  0 10
