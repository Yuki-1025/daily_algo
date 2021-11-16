// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...]
// find the minimum number of conference rooms required.

// Input:
// [[0, 30],[5, 10],[15, 20]]
// Output:
//  2

// Input:
//  [[7,10],[2,4]]
// Output:
//  1

// USE MIN-HEAP
var minMeetingRooms = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  var room = 1;
  let last = intervals[0][1];
  let lasts = new MinPriorityQueue();
  lasts.enqueue(last);
  for (let i = 1; i < intervals.length; i++) {
      //console.log(lasts.front())
      if (intervals[i][0] < lasts.front().priority) {
          room ++;
          lasts.enqueue(intervals[i][1]);
      } else {
          lasts.dequeue();
          lasts.enqueue(intervals[i][1]);
      }
  }
  return room;
};

//============WRONG ANSWER==========================================================
const findRooms = (intervals) => {
  if (intervals.length === 1) {
    return 1;
  }
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  var prev = intervals[0], room = 1, current;
  for (let i = 1; i < intervals.length; i ++) {
    current = intervals[i];
    //if overlapped, open a new room
    if (current[0] < prev[1]) {
      room ++;
      if (current[1] < prev[1]) {
        prev = current;
      }
    } else {
      // no overlap, check the next
      prev = current;
    }
  }
  return room;
}