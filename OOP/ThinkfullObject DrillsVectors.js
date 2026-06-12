class Vector {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  add(that) {
    return new Vector(this._x + that._x, this._y + that._y);
  }
}
const a = new Vector(1, 2);
console.log(a.x);
console.log(a.y);
const b = new Vector(3, 4);
const c = a.add(b);
console.log(c.x);
console.log(c.y);
