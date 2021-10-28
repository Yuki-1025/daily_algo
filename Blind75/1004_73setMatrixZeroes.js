// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to
// 0's, and return the matrix.

// You must do it in place.

// BRUTAL FORCE --complexity: O(mn);
var setZeroes = function(matrix) {
  // find zero positions
  var rows = new Set();
  var cols = new Set();
  for (let i = 0; i < matrix.length; i ++) {
      for (let j = 0; j < matrix[i].length; j ++) {
          if (matrix[i][j] === 0) {
              rows.add(i);
              cols.add(j);
          }
      }
  }
  rows.forEach((row) => {
      for (let j = 0; j < matrix[row].length; j ++) {
          matrix[row][j] = 0;
      }
  })
  cols.forEach((col) => {
      for (let i = 0; i < matrix.length; i ++) {
          matrix[i][col] = 0;
      }
  })

  return matrix;
};