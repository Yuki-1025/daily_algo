// You are given an integer array coins representing coins of different denominations and an integer
//amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money
//cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Input: coins = [2], amount = 3
// Output: -1
var coinChange = function(coins, amount) {
  // need sort first, coin must be in increasing order
  coins.sort((a, b) => { return a - b; })
  // create a matrix to store intermediate results
  var matrix = coins.map((coin) => {
    return new Array(amount + 1).fill(Infinity);
  })
  // i: coin index, j: amount;
  //for amount = 0, all no of coin should be 0
  matrix.forEach((row, i) => {
    row[0] = 0;
    for (let j = 0; j < amount + 1; j ++) {
      if (j % coins[i] === 0) {
        row[j] = j / coins[i]; //填上所有整数倍面值
      }
    }
  })
    //console.log('MATRIX ', matrix);
  // fill in other possible coin combination with coin count, leaving impossible amount infinity
  for (let row = 1; row < matrix.length; row ++) {
    for (let col = 1; col < amount + 1; col ++) {
      if (matrix[row][col] === Infinity) {
        let max = Math.floor(col / coins[row]);
        var count = matrix[row - 1][col - max*coins[row]] + max;
        for (let k = 0; k < max; k ++) {
          if ((matrix[row - 1][col - k*coins[row]] + k) < count) {
            count = (matrix[row - 1][col - k*coins[row]] + k);
          }
        }
        matrix[row][col] =  count;
      }
    }
  }
    //console.log('MATRIX ', matrix);
  var output = matrix[matrix.length - 1][amount];
  return output === Infinity? -1 : output;
}

