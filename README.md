# css-matrix

[![Greenkeeper badge](https://badges.greenkeeper.io/BohdanTkachenko/css-matrix.svg)](https://greenkeeper.io/)

## Example
```js
import { CSSMatrix } from 'css-matrix';

const transform = new CSSMatrix()
  .translate(100, 200)
  .rotate(45)
  .toTransform()
;
```
