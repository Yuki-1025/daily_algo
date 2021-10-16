// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

// You may assume that you have an infinite number of each kind of coin.

// The answer is guaranteed to fit into a signed 32-bit integer.

// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
var change = function(amount, coins) {
  coins.sort((a, b) => { return a - b; });
  var matrix = coins.map((coin) => {
      return Array(amount + 1).fill(0);
  })
  matrix.forEach((row, i) => {
      row.forEach((col, j) => {
          if (j !== 0 &&j % coins[i] === 0) {
              row[j] = 1;
          }
      })
  })
  for (let row = 1; row < coins.length; row ++) {
      for (let col = 1; col <= amount; col ++) {
          let max = Math.floor(col / coins[row]);
          let m = col/coins[row] === max? max - 1: max;
          for (let k = 1; k <= m; k ++) {
              matrix[row][col] += matrix[row - 1][col - k * coins[row]];
              //matrix[row][col] += matrix[row -1][col];
          }
      }
  }
  //console.log(matrix)
  var count = 0;
  for (let i = 0; i < coins.length; i ++) {
      count += matrix[i][amount];
  }
  return count;
};