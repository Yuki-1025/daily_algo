// Given an m x n matrix, return all elements of the matrix in spiral order.
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// input: matrix (array of arrays)
// output: array
// edge cases: [] => []; [[]] => [];

/*
Time complexity =  O(M * N) where M is the number of rows and N is the number of cols
Space complexity = O(1) as we're only using pointers and result array is not considered as extra space

The idea is to traverse the matrix in "right, down, left, up" directions order,
while keeping track and updating 2 variables "edgeCol" and "edgeRow" as the visited rows and columns (borders)
*/

var spiralOrder = function(matrix) {
  let firstRow = 0;
  let lastRow = matrix.length - 1;
  let firstCol = 0;
  let lastCol = matrix[0].length - 1;
  let result = [];

  while(firstRow <= lastRow && firstCol <= lastCol) {
      for(let i = firstCol; i <= lastCol; i++) {
          result.push(matrix[firstRow][i]);
      }
      firstRow++;

      for(let i = firstRow; i <= lastRow; i++) {
          result.push(matrix[i][lastCol]);
      }
      lastCol--;

      if(lastRow < firstRow) break;
      for(let i = lastCol; i >= firstCol; i--) {
          result.push(matrix[lastRow][i]);
      }
      lastRow--;

      if(lastCol < firstCol) break;
      for(let i = lastRow; i >= firstRow; i--) {
          result.push(matrix[i][firstCol]);
      }
      firstCol++;
  }
  return result;
};