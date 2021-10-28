// Given an integer array nums of length n where all the integers of nums are in the
//range [1, n] and each integer appears once or twice, return an array of all the integers
// that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant extra space.

var findDuplicates = function(nums) {
  var counter = {};
  var output = [];
  for (let i = 0; i < nums.length; i ++) {
      if (!counter[nums[i]]) {
          counter[nums[i]] = 1;
      } else {
          output.push(nums[i]);
      }
  }
  return output;
};

// A SMARTER WAY: USE NEGATIVE to mark duplicates
var findDuplicates = function(nums) {
  var output = [];
  for (let i = 0; i < nums.length; i++) {
      let idx = Math.abs(nums[i]) - 1;
      if (nums[idx] < 0) {
          output.push(idx + 1);
      } else {
         nums[idx] = - nums[idx];
      }
  }
  return output;
};
