// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// backtracking 公式
// base case
// for loop:
  // result.push();
  // recursive case
  // result.pop();

var subsets = function(nums) {
  var results = [];
  var result = [];
  var result2 = []
  var len = nums.length;

  const helper = (arr) => {
    // base case
    if (result.length === len) {
      for (let j = 0; j < result.length; j ++) {
        if (result[j] === 1) {
          result2.push(nums[j]);
        }
      }
      results.push(result2);
      return;
    }
    // recursive
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
      helper(arr);
      result.pop();
    }
  }
  helper([0, 1]);
  return results;
}