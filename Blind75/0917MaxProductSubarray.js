// Given an integer array nums, find a contiguous non-empty subarray within the array that
// has the largest product, and return the product.

// It is guaranteed that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

// input: integer array
// output: a number, product of subarray
//constraints
// edge cases: []

// O(n^2)
var maxProduct = function(nums) {
  var result = nums[0];
  for (let start = 0; start < nums.length; start ++) {
      var product = 1;
      for (let end = start; end < nums.length; end ++) {
          product *= nums[end];
          if ( product > result) {
              result = product;
          }
      }
  }
  return result;
};

//O(n)
var maxProduct = function(nums) {
  var biggest = [], smallest = [];
  biggest[0] = nums[0];
  smallest[0] = nums[0];

  for (let i = 1; i < nums.length; i ++) {
      biggest[i] = Math.max(biggest[i-1] * nums[i], smallest[i-1] * nums[i], nums[i]);
      smallest[i] = Math.min(biggest[i-1] * nums[i], smallest[i-1] * nums[i], nums[i]);
  }

  return Math.max(...biggest);
};