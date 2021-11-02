// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]

// O (Log(n) + k)
var findClosestElements = function(arr, k, x) {
  // first find x position, then find neighbors
  var output = [];
  //edge
  if (x < arr[0]) {
      for (let i = 0; i < k; i++) {
          output.push(arr[i]);
      }
  }
  if (x > arr[arr.length - 1]) {
      for (let i = arr.length - 1; i > arr.length - 1 -k; i--) {
          output.push(arr[i]);
      }
  }
  // regular cases
  let start = 0, end = arr.length - 1;
  while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === x) {
          //add neighbors around mid
          output = addNeighbors([mid], arr, [], k, x);
          break;
      } else if (x < arr[mid]) {
          if (arr[mid-1] && x > arr[mid-1]) {
              // add neigbors
              output = addNeighbors([mid-1, mid], arr, [], k, x);
              break;
          } else {
              end = mid - 1;
          }
      } else { // x > arr[mid]
          if (arr[mid+1] && x < arr[mid + 1]) {
              // add neighbors
              output = addNeighbors([mid, mid+1], arr, [], k, x);
              break;
          } else {
              start = mid + 1;
          }
      }
  }
  output.sort((a, b) => a - b);
  return output;
};

const addNeighbors = (idx, arr, res, k, x) => {
  if (idx.length === 1) {
      let i = idx[0];
      res.push(arr[i]);
      k--;
      var left = i-1, right = i+1;
  } else {
      var left = idx[0], right = idx[1];
  }
  while(k > 0 && (left >= 0 || right < arr.length)) {
      if (left >= 0 && right < arr.length) {
          if (x-arr[left] <= arr[right]-x) {
              res.push(arr[left]);
              k--;
              left --;
          } else {
              res.push(arr[right]);
              k--;
              right ++;
          }
      } else {
          if (left >=0) {
              res.push(arr[left]);
              k--;
              left --;
          } else {
              res.push(arr[right]);
              k--;
              right ++;
          }
      }
  }
  return res;
}