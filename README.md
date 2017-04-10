# rough-sortedness [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Utility to compute the rough sortedness of a list.

Rough-Sortedness takes the ratio of the number of incrementing sequences in an array and divides it by the length of the total array to estimate the general sortedness of the array. 

**Warning:** this rough sortedness metric is blind to interleaved sorted sequences, and reversed but perfectly sorted arrays will return a score of 0. 


## Usage
```js
const roughSortedness = require('rough-sortedness')

var sorted = [1,2,3,4,5,6]
var unsorted = [1,2,3,4,6,5]
console.log(roughSortedness(sorted) > roughSortedness(unsorted))
```

## API
### roughSortedness
`roughSortedness(arr, (a,b)=>{return a.value - b.value})`

The function expects an array of items, and a comparator function. If no comparator function is provided, it will default to `function defaultComparator (a, b) {return a - b}`. The function returns a value from 0 to 1, where 1 is perfectly sorted, and 0 is impossibly unsorted. 


## Installation
```sh
$ npm install rough-sortedness
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/rough-sortedness.svg?style=flat-square
[3]: https://npmjs.org/package/rough-sortedness
[4]: https://img.shields.io/travis/JDvorak/rough-sortedness/master.svg?style=flat-square
[5]: https://travis-ci.org/JDvorak/rough-sortedness
[6]: https://img.shields.io/codecov/c/github/JDvorak/rough-sortedness/master.svg?style=flat-square
[7]: https://codecov.io/github/JDvorak/rough-sortedness
[8]: http://img.shields.io/npm/dm/rough-sortedness.svg?style=flat-square
[9]: https://npmjs.org/package/rough-sortedness
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
