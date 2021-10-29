// Given an unsorted array of integers nums, return the length of the longest consecutive
// elements sequence.
// You must write an algorithm that runs in O(n) time.

var longestConsecutive = function(nums) {
  // edge case
  if (nums.length === 0) return 0;
  // store all elements in object
  var map = {};
  for (let i = 0; i < nums.length; i ++) {
      if (!map[nums[i]]) {
          map[nums[i]] = 1;
      }
  }
  // find the longest
  var counter;
  var max = 1;
  for (let i = 0; i < nums.length; i ++) {
      counter = 1;
      let curr = nums[i];
      if (!map[curr - 1]) { // find the smallest in the sequence then start looping
          while (map[curr + 1]) {
              counter ++;
              max = Math.max(max, counter);
              curr ++;
          }
      }
  }
  return max;
};