// Write an efficient algorithm that searches for a target value in an m x n integer
// matrix. The matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
// 非常巧妙的方法：从matrix右上角开始，target小->左移; target小->下移
// time complexity: m + n
var searchMatrix = function(matrix, target) {
  var lenR = matrix.length;
  var lenC = matrix[0].length;
  // edge
  if (target < matrix[0][0] || target > matrix[lenR-1][lenC-1]) return false;
  //
  let row = 0, col = lenC - 1;
  while (row < lenR && col >= 0) {
      if (matrix[row][col] === target) return true;
      if (target < matrix[row][col]) {
          col --;
      } else {
          row ++;
      }
  }
  return false;
};