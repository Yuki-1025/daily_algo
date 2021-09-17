// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// input: integer array
// output: a number (sum of subarray)
// contraints: length > 0
// edge cases: [] no empty array; [1] => return 1; the array itself can also be a subarray

// O(n)
var maxSubArray = function(nums) {
  // create a new array to store largest sum
  var largest = [];
  largest[0] = nums[0];

  for (let i = 1; i < nums.length; i ++) {
      if (largest[i - 1] + nums[i] > nums[i]) {
          largest[i] = largest[i - 1] + nums[i];
      } else {
          largest[i] = nums[i]
      }
  }

  return Math.max(...largest);
};

// O(n^3)
var maxSubArray = function(nums) {
  // start of subarray
  var result = nums[0];
  for (let start = 0; start < nums.length; start ++) {
      for (let end = start + 1; end < nums.length + 1; end ++) {
          var subArr = nums.slice(start, end);
          var sum = subArr.reduce((memo, num) => {return memo + num;});
          if(sum > result) {
              result = sum;
          }
      }
  }
  return result;
};

// O(n^2)
var maxSubArray = function(nums) {
  // start of subarray
  var result = nums[0];
  for (let start = 0; start < nums.length; start ++) {
      var sum = 0;
      for (let end = start; end < nums.length; end ++) {
          sum += nums[end];
          if ( sum > result) {
              result = sum;
          }
      }
  }
  return result;
};