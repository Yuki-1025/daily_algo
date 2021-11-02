// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

//complexity: O(logn + logm)
var searchMatrix = function(matrix, target) {
  var rlen = matrix[0].length;
  if (target < matrix[0][0] || target > matrix[matrix.length - 1][rlen - 1]) {
      return false;
  }
  var startR = 0, endR = matrix.length - 1;
  while (startR <= endR) {
      var mid = Math.floor((startR + endR) / 2);
      if (target < matrix[mid][0]) {
          endR = mid - 1;
      } else if (target > matrix[mid][rlen - 1]) {
          startR = mid + 1
      } else {
          // invoke regular binary search
          return binarySearch(matrix[mid], target);
      }
  }
  return false;
};

var binarySearch = (arr, target) => {
  var startC = 0, endC = arr.length - 1;
  while (startC <= endC) {
      let mid = Math.floor((startC + endC) / 2);
      if (target < arr[mid]) {
          endC = mid - 1;
      } else if (target > arr[mid]) {
          startC = mid + 1;
      } else {
          return true;
      }
  }
  return false;
}

// const bSearch = (arr, target) => {
//     var start = 0, end = arr.length - 1;
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === target) {
//             return true;
//         }
//         if (arr[mid] < target) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
//     return false;
// }