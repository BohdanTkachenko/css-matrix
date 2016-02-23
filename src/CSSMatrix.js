import math from 'mathjs';

const SIZE = 3;

export class CSSMatrix {
  static ident() {
    const matr = math.zeros(SIZE, SIZE);

    for (let i = 0; i < 3; i++) {
      matr.set([i, i], 1);
    }

    return matr;
  }

  transforms = []

  translate(x, y) {
    const matr = CSSMatrix.ident();
    matr.set([0, 2], x);
    matr.set([1, 2], y);

    this.transforms.push(matr);
    return this;
  }

  rotate(deg = 0) {
    const rad = deg * (Math.PI * 2 / 360);
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);

    const matr = CSSMatrix.ident();
    matr.set([0, 0], cos);
    matr.set([0, 1], -sin);
    matr.set([1, 0], sin);
    matr.set([1, 1], cos);

    this.transforms.push(matr);
    return this;
  }

  scale(x, y) {
    const matr = CSSMatrix.ident();
    matr.set([0, 0], x);
    matr.set([1, 1], y);

    this.transforms.push(matr);
    return this;
  }

  getMatrix() {
    let matr = CSSMatrix.ident();
    for (const current of this.transforms) {
      matr = math.multiply(matr, current);
    }

    return matr.toArray();
  }

  toTransform() {
    const m = this.getMatrix();
    const transform = [
      m[0][0],
      m[1][0],
      m[0][1],
      m[1][1],
      m[0][2],
      m[1][2],
    ].join(', ');

    return `matrix(${transform})`;
  }
}
