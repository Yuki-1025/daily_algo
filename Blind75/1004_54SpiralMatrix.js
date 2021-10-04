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
  let r = matrix.length, c = matrix[0].length, result = [];
  let count = 0, total = r * c;
  let edgeCol = edgeRow = 0;

  while (count < total) {
    for (let j = edgeCol; j < c - edgeCol; j++) {
      if (count < total) { result.push(matrix[edgeRow][j]); count++; }
      else { break; }
    }

    for (let i = edgeRow + 1, j = c - 1 - edgeCol; i < r - edgeRow; i++) {
      if (count < total) { result.push(matrix[i][j]); count++; }
      else { break; }
    }

    edgeRow++;

    for (let j = c - 2 - edgeCol, i = r - edgeRow; j >= edgeCol; j--) {
      if (count < total) { result.push(matrix[i][j]); count++; }
      else { break; }
    }

    for (let i = r - 1 - edgeRow; i >= edgeRow; i--) {
      if (count < total) { result.push(matrix[i][edgeCol]); count++; }
      else { break; }
    }

    edgeCol++;
  }

  return result;
};