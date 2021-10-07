// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number
//of intervals you need to remove to make the rest of the intervals non-overlapping.

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

// input : array of intervals
// output: a number

//*巧妙的方法，记 */
var eraseOverlapIntervals = function(intervals) {
  // edge case
  if (intervals.length === 1) {
      return 0;
  }
  // sort First
  intervals.sort((a, b) => {
      return a[0] - b[0];
  })
  // greedy
  var prev = intervals[0], count = 0, curr;
  for (let i = 1; i < intervals.length; i ++) {
      curr = intervals[i];
      if (curr[0] >= prev[1]) {
          prev = curr;
      } else {
          count ++;
          if (curr[1] < prev[1]) {
              prev = curr;
          }
      }
  }
  return count;
};