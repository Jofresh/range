# Range
## What is it ?
Creates an array of numbers progressing from start up to end, reversed or not. Inspired from [lodash.\_range](https://lodash.com/docs/4.17.15#range) method.

## Usage
```range([start = 0], end, [step = 1], reverse)```

```
const { range } = require('./range.js')
console.log( range(0, 9, 3, true) )     // prints [6, 3, 0]
console.log( range(0, 4) )              // prints [0, 1, 2, 3]
```
## Run
```
node index.js
```
