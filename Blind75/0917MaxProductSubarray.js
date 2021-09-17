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