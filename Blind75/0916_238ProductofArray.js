// Given an integer array nums, return an array answer such that answer[i] is equal to the product of
//all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// input: array of integers
// output: array of intergers
// constraint: O(n), no division operation
// edge cases: []; [1]; [1,2]

//O(n^2)
var productExceptSelf = function(nums) {
  var products = [];
  // loop over nums
      // for each ele in nums, loop over the rest of the array to get a product
  for (let i = 0; i < nums.length; i ++) {
      var subArr = nums.slice(0, i).concat(nums.slice(i+1));
      var product = 1;
      for (let j = 0; j < subArr.length; j ++) {
          product *= subArr[j];
      }
      products.push(product);
  }
  return products;
};

// O(n) SOLUTION
//思想：依靠依次连乘可减少loop
var productExceptSelf = function(nums) {
  // to get a left product array
  var left = [];
  var factor = 1;
  for (let i = 0; i < nums.length; i ++) {
      left[i] = factor;
      factor *= nums[i];
  }
  // right product array
  var right = [];
  var factor2 = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
      right[j] = factor2;
      factor2 *= nums[j];
  }

  var result = [];
  for (let k = 0; k < nums.length; k ++) {
      result[k] = left[k] * right[k];
  }
  return result;
};
