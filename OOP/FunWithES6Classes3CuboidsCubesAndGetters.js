class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get volume() {
    return this.length * this.width * this.height;
  }
  get surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}

// test class cuboid
// const cuboid = new Cuboid(1, 2, 3);
// console.log(cuboid.length); // 1
// console.log(cuboid.width); // 2
// console.log(cuboid.height); // 3
// console.log(cuboid.volume); // 6
// console.log(cuboid.surfaceArea); // 22

// test class cube
// const cube = new Cube(3);
// console.log(cube.length);
// console.log(cube.width);
// console.log(cube.height);
// console.log(cube.volume);
// console.log(cube.surfaceArea);
