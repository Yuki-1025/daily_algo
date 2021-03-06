// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti,
// endi] represent the start and the end of the ith interval and intervals is sorted in ascending
// order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by
// starti and intervals still does not have any overlapping intervals (merge overlapping
//intervals if necessary).

// Return intervals after the insertion.

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// input : array of intervals, single interval
// output: array of intervals

// O(n) insert witj merge (Q56)
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval];
    }
    // find correct postion to insert first
    //var pos;
    if (newInterval[0] <= intervals[0][0]) {
        intervals.unshift(newInterval);
        //pos = 0;
    }
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] <= newInterval[0] && (!intervals[i+1] || intervals[i+1][0] > newInterval[0]) ) {
            intervals.splice(i+1, 0, newInterval);
            //pos = i+1;
            break;
        }
    }
    // start merge
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
}

//O n =======Method ii ===========================================================
var insert = function(intervals, newInterval) {
  // edge case
  if (intervals.length === 0) {
      return [newInterval];
  }
  if (newInterval[1] < intervals[0][0]) {
      intervals.unshift(newInterval);
      return intervals;
  }
  if (newInterval[0] > intervals[intervals.length - 1][1]) {
      intervals.push(newInterval);
      return intervals;
  }
  var output = [], needMerge = false;
  // find insertion position
  for (let i = 0; i < intervals.length; i ++) {
      if (newInterval[0] <= intervals[i][1] && newInterval[1] >= intervals[i][0]) {
          newInterval = checkMerge(newInterval, intervals[i]);
          needMerge = true;
      }
      else if (newInterval[0] > intervals[i][1] && (!intervals[i+1] || newInterval[1] < intervals[i+1][0])) {
          output.push(intervals[i]);
          output.push(newInterval);
      }
      else {
          if (needMerge) {
              output.push(newInterval);
              needMerge = false;
          }
          output.push(intervals[i]);
      }
  }
  if (needMerge) {
      output.push(newInterval);
      needMerge = false;
  }
  return output;
};


const checkMerge = function(in1, in2) {
  let min = Math.min(in1[0], in2[0]);
  let max = Math.max(in1[1], in2[1]);
  return [min, max];
}




var insert = function(intervals, newInterval) {
  // edge case
  if (intervals.length === 0) {
      return [newInterval];
  }
  // if (newInterval[1] < intervals[0][0]) {
  //     intervals.unshift(newInterval);
  // }
  // if (newInterval[0] > intervals[intervals.length - 1][1]) {
  //     intervals.push(newInterval);
  // }
  var temp = mergeTwo(intervals[0], newInterval);
  var idx = 0, output = [];
  while (idx < intervals.length) {
      if (temp[0] === 'left') {
          output.push(temp[1]);
          output = output.concat(intervals.slice(idx));
          break;
      } else if (temp[0] === 'right') {
          output.push(intervals[idx]);
          if (idx + 1 < intervals.length) {
              idx++;
              temp = mergeTwo(intervals[idx], temp[1]);
          } else { output.push(temp[1]) }
      } else {
          if (idx + 1 < intervals.length) {
              idx ++;
              temp = mergeTwo(temp, intervals[idx]);
          } else {
              output.push(temp);
          }
      }
  }
  return output;
};


const mergeTwo = function(in1, in2) {
  if (in2[1] < in1[0]) {
      return ['left', in2];
  }
  else if (in1[1] < in2[0]) {
      return ['right', in2];
  }
  else {
      let min = Math.min(in1[0], in2[0]);
      let max = Math.max(in1[1], in2[1]);
      return [min, max];
  }
}
