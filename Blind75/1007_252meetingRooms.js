// input : array of intervals
// output: boolean, T if no overlapped intervals, F if overlapped

// For example,
// Given [ [0, 30], [5, 10], [15, 20] ],
// return false.

const meetingRooms = (intervals) => {
  if (intervals.length === 1) {
    return true;
  }
  // sort
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let i = 0; i < intervals.length - 1; i ++) {
    if (intervals[i + 1][0] < intervals[i][1]) {
      return false;
    }
  }
  return true;
}