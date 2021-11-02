// Given an array of distinct integers nums and a target integer target, return the number of
// possible combinations that add up to target.

// The answer is guaranteed to fit in a 32-bit integer.

// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.

// input : array of integers, target number
// output: number
// constraints: all non-negative values
// edge case: target number is smaller than any nums in given array.=> return 0;

// COIN CHANGE METHOD [DP] or backtracking
var combinationSum4 = function(nums, target) {
    // create a matrix to store intermediate results
    var memo = Array(target + 1).fill(0);
    // memo[0] = 0, bc no combination sum up to 0
    // now fill in memo[1-target];
    for (let i = 1; i <= target; i ++) {
        for (let num of nums) {
            if (i - num === 0) {
                memo[i] ++;
            } else if (i - num > 0) {
                memo[i] += memo[i-num];
            }
        }
    }
    return memo[target];
};

// backtracking
var combinationSum4 = function(nums, target) {
  var combinations = [];
  var combination = [], sum = 0;
  const helper = (target) => {
      if (sum === target) {
          combinations.push(combination.toString());
          //console.log(combinations);
          return;
      }
      if (sum > target) { return; }
      //sum < target
      for (let i = 0; i < nums.length; i ++) {
          combination.push(nums[i]);
          sum += nums[i];
          helper(target);
          combination.pop();
          sum -= nums[i];
      }
  }
  helper(target);
  return combinations.length;
};