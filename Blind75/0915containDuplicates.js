// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// input: an array of integers
// a boolean: true or false
// constraints:
// edge case: [] => false; [1] => false;
// time complexity: O(n) - all 3 solutions

var containsDuplicate = function(nums) {
  // edge cases
  if (nums.length < 2) {
      return false;
  }
  //normal cases
  var obj = {};
  for (let i = 0; i < nums.length; i ++) {
      if (obj[nums[i]] === undefined) {
          obj[nums[i]] = i;
      } else {
          return true;
      }
  }
  return false;
};

// SOLUTION 2 using set
var containsDuplicate = function(nums) {
  var toSet = new Set();
  for (let i = 0; i < nums.length; i ++) {
      if (toSet.has(nums[i])) {
          return true;
      } else {
          toSet.add(nums[i]);
      }
  }
  return false;
};

// SOLUTION 3
var containsDuplicate = function(nums) {
  var toSet = new Set(nums);
  if (toSet.size !== nums.length) {
      return true;
  }
  return false;
};
