# Math Exact (Floating Point Math)

[![npm version](https://badge.fury.io/js/math-exact.svg)](https://badge.fury.io/js/math-exact)
[![npm downloads](https://img.shields.io/npm/dm/math-exact.svg)](https://www.npmjs.com/package/math-exact)

*  [Features](#features)
*  [Built With](#built-with)
*  [Pending Items](#pending-items)
*  [Getting Started](#getting-started)
*  [Example Code](#example-code)
*  [Changelog](#changelog)

## Features
*  ✅ Built with TypeScript
*  ✅ Tested with Jest

## Built With
* [TypeScript](https://github.com/microsoft/TypeScript) - Programming Language
* [Jest](https://jestjs.io) - Testing

## Pending Items
- [ ] 

## Getting Started
**1. Install Package:**
```
npm i math-exact
```


## Example Code
**Add:**
```javascript
// Imports: Dependencies
import { mathExact } from 'math-exact';

mathExact('Add', 1, 2); // 3
mathExact('Add', .1, .2);  // .3
mathExact('Add', 1.123, .2);  // 1.323
mathExact('Add', .02, 1.123); // 1.143
```

**Subtract:**
```javascript
// Imports: Dependencies
import { mathExact } from 'math-exact';

mathExact('Subtract', 1, 2): // -1
mathExact('Subtract', .1, .2);  // -.1
mathExact('Subtract', 1.123, .2);  // .923
mathExact('Subtract', .02, 1.123); // -1.103
```

**Multiply:**
```javascript
// Imports: Dependencies
import { mathExact } from 'math-exact';

mathExact('Multiply', 1, 2); // 2
mathExact('Multiply', .1, .2);  // .02
mathExact('Multiply', 1.123, .2);  // .2246
mathExact('Multiply', .02, 1.123); // .002246
```

**Divide:**
```javascript
// Imports: Dependencies
import { mathExact } from 'math-exact';

mathExact('Divide', 1, 2); // .5
mathExact('Divide', .1, .2);  // .5
mathExact('Divide', 1.123, .2);  // 5.615
mathExact('Divide', .02, 1.123); // .017809439002671415
```

## Changelog

### [1.0.4] - 12/11/2020

***Changed***

- Changed decimal points from 17 to 15.

### [1.0.3] - 12/11/2020

***Changed***

- Fixed build file issue.
- Updated README example code.

### [1.0.2] - 12/10/2020

***Changed***

- Updated README title & example code.

### [1.0.1] - 12/10/2020

***Changed***

- Updated README example code.
