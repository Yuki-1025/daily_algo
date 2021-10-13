// Given a 2D matrix matrix, handle multiple queries of the following type:

// Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
// Implement the NumMatrix class:

// NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
// int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

// DYNAMIC PROGRAMMING + PREFIX SUM
var NumMatrix = function(matrix) {
  this.storage = matrix;
  this.prefix = matrix.map((row) => {
      return [];
  });
  this.prefix[0][0] = matrix[0][0];
  // calculate separately for first row and first col
  for (let col = 1; col < matrix[0].length; col ++) {
      this.prefix[0][col] = matrix[0][col] + this.prefix[0][col - 1];
  }
  for (let row = 1; row < matrix.length; row ++) {
      this.prefix[row][0] = matrix[row][0] + this.prefix[row - 1][0];
  }
  // for the other cells
  for (let i = 1; i < matrix.length; i ++) {
      for (let j = 1; j < matrix[0].length; j ++) {
          this.prefix[i][j] = matrix[i][j] + this.prefix[i-1][j] + this.prefix[i][j-1] - this.prefix[i-1][j-1];
      }
  }
};

/**
* @param {number} row1
* @param {number} col1
* @param {number} row2
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let a = this.prefix[row1 - 1] === undefined? 0 : this.prefix[row1 - 1][col2];
  let b = this.prefix[row2][col1 -1] || 0;
  let c = this.prefix[row1 - 1] === undefined? 0 : this.prefix[row1 - 1][col1 -1] || 0;
  return this.prefix[row2][col2] - a - b + c;
};

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/


var NumMatrix = function(matrix) {
  this.storage = matrix;

};

/**
* @param {number} row1
* @param {number} col1
* @param {number} row2
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  var sum = 0
  for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j ++) {
          sum += this.storage[i][j];
      }
  }
  return sum;
};

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/

