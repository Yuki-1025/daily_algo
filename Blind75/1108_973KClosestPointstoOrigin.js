// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an
// integer k, return the k closest points to the origin (0, 0).
// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 +
// (y1 - y2)2).
// You may return the answer in any order. The answer is guaranteed to be unique (except for the
// order that it is in).

Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.

// time complexity O(nlogn) => bc sorting
// could use HEAP to improve => we don't sort, rather we use heap add logk
var kClosest = function(points, k) {
  // first calculate distances for each pos
  var distances = [];
  for (let i = 0; i < points.length; i++) {
      let d2 = points[i][0] ** 2 + points[i][1] ** 2;
      distances.push([i, d2]);
  }

  // sort
  distances.sort((a, b) => a[1] - b[1]);
  // get first k
  var res = [];
  for (let i = 0; i < k; i ++) {
      res.push(points[distances[i][0]]);
  }

  return res;
};