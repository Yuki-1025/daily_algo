// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return
// the maximum number of points that lie on the same straight line.

Input: points = [[1,1],[2,2],[3,3]]
Output: 3
Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4

var maxPoints = function(points) {
  var max = 1;
  for (let i = 0; i < points.length; i++) {
      let p1= points[i];
      for (let j = i + 1; j < points.length; j++) {
          let p2 = points[j];
          // two points form a line
              // special case -- vertical line
          var count = 2;
          if (p1[0] === p2[0]) {
              for (let n = j+1; n < points.length; n++) {
                  if (points[n][0] === p1[0]) count ++;
              }
          } else {
              let k = (p2[1] - p1[1])/(p2[0] - p1[0]);
              let l = p1[1] - k* p1[0];
              for (let n = j+1; n < points.length; n++) {
                  //if (checkSameLine(k, l, points[n])) count ++;
                  let khat = (points[n][1] - p2[1])/(points[n][0]-p2[0]);
                  if (khat === k) count ++;
              }
          }
          //console.log(count);
          max = Math.max(max, count);
      }
  }
  return max;
};