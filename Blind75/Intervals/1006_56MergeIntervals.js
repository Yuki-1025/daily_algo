// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and
// return an array of the non-overlapping intervals that cover all the intervals in the input.

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// complexity: O(nlogn)
var merge = function(intervals) {
  // edge case
  if (intervals.length === 1) {
      return intervals;
  }
  // FIRST sort intervals
  intervals.sort((a, b) => {
      return a[0] - b[0];
  })

  var output = [intervals[0]], lastone;
  for (let i = 1; i < intervals.length; i++) {
      lastone = output[output.length - 1];
      if (intervals[i][0] > lastone[1]) {
          output.push(intervals[i]);
      } else {
          let merged = [lastone[0], Math.max(lastone[1], intervals[i][1])];
          output[output.length - 1] = merged;
      }
  }
  return output;
};

// slightly different SOLUTION:========================
var merge = function(intervals) {
    // edge
    if (intervals.length <= 1) return intervals;
    // sort based on start
    intervals.sort((a, b) => a[0] - b[0]);
    //
    var last = intervals[0];
    var res = [];
    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i]
        if (curr[0] <= last[1]) {
            last[1] = Math.max(curr[1], last[1])
        } else {
            res.push(last);
            last = curr;
        }
    }
    res.push(last);
    return res;
}