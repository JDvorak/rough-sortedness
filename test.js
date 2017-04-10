const test = require('tape')
const roughSortedness = require('./')

test('should estimate sortedness of an array', function (t) {
  t.plan(4)
  var arr = []
  for (var i = 0; i < 10000; i++) {
    arr.push(Math.random())
  }
  var random = roughSortedness(arr)
  var sorted = roughSortedness(arr.slice().sort())
  var half = roughSortedness(arr.slice(0, 5000).concat(arr.slice(5000, Infinity).sort()))
  var repeating = roughSortedness(arr.slice(0, 10).sort().concat(arr.slice(10, 20).sort()).concat(arr.slice(20, 30).sort()))
  // var interlaced = roughSortedness([1,4,2,5,3,6,4,7,5,8,6,9,7,10,8,11,9,12,10,13])

  t.assert(random < sorted, 'Should correctly estimate a random array as unsorted.')
  t.assert(sorted > random && sorted > repeating && sorted > half, 'Should correctly estimate a sorted array as more sorted than half or repeating.')
  t.assert((half > random && half < sorted), 'Should correctly estimate a half random array concatenated with a half sorted array as less than totally sorted but more than random.')
  t.assert(repeating > half, 'Should correctly estimate an array of sequenced sorted arrays as more sorted than a half random array')
  // t.assert(interlaced > half, 'Should correctly estimate interlaced sorted arrays as more sorted than a half random array')
})
