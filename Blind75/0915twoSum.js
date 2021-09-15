// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// input: an array of integers, an integer
// output: array of 2 indices: [index of number1, index of number2]
// constraints: has and has one solution
// edge cases: empty array [] => return []

// complexity: n * (n-1); n^2

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      var num1 = nums[i];
      for (let j = i + 1; j < nums.length; j ++) {
          if (num1 + nums[j] === target) {
              return [i, j];
          }
      }
  }
};