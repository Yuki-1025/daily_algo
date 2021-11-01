// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞.

// You must write an algorithm that runs in O(log n) time.

//UNIT TEST
// 1)one peak:
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
// 2)more than one peak
// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or
// index number 5 where the peak element is 6.
// 3)No peak
//[1,1,1,1] => -1?
var findPeakElement = function(nums) {
  // use binary search because we just want one peak not all peaks!
  var start = 0;
  var end = nums.length - 1;
  while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      let left = nums[mid - 1] === undefined? -Infinity : nums[mid-1];
      let right = nums[mid + 1] === undefined? -Infinity : nums[mid+1];

      if (nums[mid] > left && nums[mid] > right) {
          return mid;
      } else if (left > nums[mid]) {
          // search left
          end = mid - 1;
      } else {
          //search right
          start = mid + 1;
      }
  }
  return -1;
};