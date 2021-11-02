// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements
// without changing the order of the remaining elements. For example, [3,6,2,7] is a
//subsequence of the array [0,3,1,6,2,2,7].

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Input: nums = [0,1,0,3,2,3]
Output: 4
Input: nums = [7,7,7,7,7,7,7]
Output: 1

// DYNAMIC PROGRAMMING
var lengthOfLIS = function(nums) {
  // maintain an array to record subsequence length on each position
  var memo = Array(nums.length).fill(0);
  memo[0] = 1;// with initial value: 1
  for (let i = 1; i < nums.length; i ++) {
      for (let j = i-1; j >= 0; j--) { // FIND THE LONGEST SEQ before i
          if (nums[i] > nums[j]) {
              memo[i] = Math.max(memo[i], memo[j] + 1);
          }
      }
      if (!memo[i]) memo[i] = 1; // if all previous ele is larger, then give value 1
  }
  return Math.max(...memo);
};