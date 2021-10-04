// Given an m x n matrix, return all elements of the matrix in spiral order.
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// input: matrix (array of arrays)
// output: array
// edge cases: [] => []; [[]] => [];

var spiralOrder = function(matrix) {
  var result = [];
  // var rowMax = matrix.length;
  // var colMax = matrix[0].length;
  // var round = Math.floor((Math.min(rowMax, colMax) + 1) / 2);

  var roundScan = (input) => {
      if (input.length === 1) {
          result = result.concat(input);
          return result;
      }
      var row = 0, col = 0;
      while (row < input.length && col < input[0].length) {
          if (row === 0 && col < input[0].length - 1) {
              result.push(input[row][col]);
              col ++;
          }
          else if (col === input[0].length - 1 && row < input.length - 1) {
              result.push(input[row][col]);
              row ++;
          }
          else if (col < input[0].length && row === input.length - 1 && col > 0) {
              result.push(input[row][col]);
              col --;
          }
          else if (col === 0 && row < input.length - 1 && row > 0) {
              result.push(input[row][col]);
              row --;
          }
          else if ( col === 0 && row === 0) {
              console.log('RESULT ', result)
              return result;
          }
      }
  }
  roundScan(matrix);
};