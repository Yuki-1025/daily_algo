// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
// The robot can only move either down or right at any point in time. The robot is trying to reach the
//bottom-right corner of the grid (marked 'Finish' in the diagram below).
// How many possible unique paths are there?

// Input: m = 3, n = 7
// Output: 28

// complexity: O(mn)
var uniquePaths = function(m, n) {
  // create a matrix
  var memo = Array(m).fill(0).map((row) => {
      return Array(n).fill(0);
  })
  // fill in special cases
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (i === 0) {
              memo[i][j] = 1;
          }
          if (j === 0) {
              memo[i][j] = 1;
          }
      }
  }

  // dp cases
  for (let col = 1; col < n; col ++) {
      for (let row = 1; row < m; row ++) {
          memo[row][col] = memo[row-1][col] + memo[row][col-1];
      }
  }
  return memo[m-1][n-1];
};