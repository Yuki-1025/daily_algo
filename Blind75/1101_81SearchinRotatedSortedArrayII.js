// There is an integer array nums sorted in non-decreasing order (not necessarily with
// distinct values).
// Before being passed to your function, nums is rotated at an unknown pivot index k
// (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ...,
// nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example,
// [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become
// [4,5,6,6,7,0,1,2,4,4].
// Given the array nums after the rotation and an integer target, return true if target
// is in nums, or false if it is not in nums.
// You must decrease the overall operation steps as much as possible.

// the DIFFERENCE IS NUMS ARE NOT UNIQUE

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
[1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1]
2

var search = function(nums, target) {
  var start = 0, end = nums.length - 1;
  while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (target === nums[start] || target === nums[end] || target === nums[mid]) {
          return true;
      }
      if (end - start < 3) {
          return false;
      }
      if (nums[mid] > nums[start]) {
        if (target < nums[start] || target > nums[mid]) {
            // search right
            start = mid + 1;
        } else if (target > nums[start] && target < nums[mid]) {
            // search left
            end = mid - 1;
        }
    } else if (nums[mid] < nums[start]) {
        if (target < nums[mid] || target > nums[start]) {
            //search left
            end = mid - 1;
        } else if (target > nums[mid] && target < nums[end]) {
            //search right
            start = mid + 1;
        } else {
            return false;
        }
    } else { //if nums[mid] === nums[start]
        if (nums[mid] !== nums[end]) {
            start = mid + 1;
        } else { // cannot decide which part to search
            start ++;
            end --;
        }
    }
  }
};