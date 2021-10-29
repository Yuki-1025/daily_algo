// You are given an integer array nums and an integer target.

// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each
//integer in nums and then concatenate all the integers.

// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them
//to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3

// DP should be more efficient

//BACKTRACKING
var findTargetSumWays = function(nums, target) {
  var counter = 0;

  const findRes = (sum, n) => {
      if (n === nums.length) {
          if (sum === target) {
              counter++;
          }
          return;
      }
      let options = [Math.abs(nums[n]), -Math.abs(nums[n])];
      for (let o of options) {
          n ++;
          sum += o;
          findRes(sum, n);
          n --;
          sum -= o;
      }
  }
  findRes(0, 0);
  return counter;
};
