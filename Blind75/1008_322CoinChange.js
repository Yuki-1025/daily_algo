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
  var memos = {};

  const helper = (coins, amount) => {
      if (amount === 0) { return 0; }

      if (coins.length === 1) {
          if (amount % coins[0] === 0) {
              return amount / coins[0]
          } else {
              return -1;
          }
      }
      for (let i = 0; i < coins.length; i ++) {
          if (amount === coins[i]) {
              return 1;
          }
          //else if () {}
      }
      if (!memos[amount]) {
          memos[amount] = 0;
          for (let j = 0; j < coins.length; j ++) {
              memos[amount] += helper(coins, amount - coins[j]);
          }
          return memos[amount];
      }
  }
  return helper(coins, amount);
};