module.exports = longestSumSequenceSortedness

// Utility to compute the rough sortedness of a list
function longestSumSequenceSortedness (arr, comparator) {
  comparator = function defaultComparator (a, b) {
    return a - b
  }

  var longestWalk = 0
  var allWalks = []
  var currentWalk = 1
  var len = arr.length

  for (var i = 1; i < len; i++) {
    if (comparator(arr[i], arr[i - 1]) >= 0) {
      currentWalk++
      if (currentWalk > longestWalk) {
        longestWalk = currentWalk
      }
    } else {
      allWalks.push(currentWalk)
      currentWalk = 1
    }
  }

  if (allWalks.length === 0) {
    allWalks.push(longestWalk)
  }

  return 1.0 - allWalks.length / len
}
