// Given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi.

// You can attend an event i at any day d where startTimei <= d <= endTimei. Notice that you can only attend one event at any time d.

// Return the maximum number of events you can attend.

// n log n
var maxEvents = function(events) {
  // edge
  if (events.length === 1) return 1;

  // sort by start
  events.sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      return a[0] - b[0];
  });
  // find the total days
  var days = 0;
  for (let [i, j] of events) days = Math.max(j, days);
  //
  var i = 0, res = 0, len = events.length;
  var ends = new MinPriorityQueue();
  for (let d = 1; d <= days; d++) {
      // add open events in pq
      while (i < len && events[i][0] <= d) {
          ends.enqueue(events[i][1]);
          i++;
      }
      //check if events in pq already closed on day d, and remove the closed
      while (!ends.isEmpty() && ends.front().priority < d) {
          ends.dequeue();
      }
      // choose the open event with the closest end date to attend
      if (!ends.isEmpty()) {
          res++;
          ends.dequeue();
      }
  }
  return res;
};