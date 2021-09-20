// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is rotated at an unknown pivot index
// k (0 <= k < nums.length) such that the resulting array is
//[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
//For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the rotation and an integer target, return the index of target
//if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

// input: array of distinct integers
// output: the index of target number in rotated array, if none: -1
// constraint: log n
// edgecases:

var search = function(nums, target) {
  // find the mid point
  var mid = Math.floor((nums.length - 1) / 2);
  //console.log('MID ', mid);

  if (target === nums[0]) {
      return 0;
  } else if (target === nums[mid]) {
      //console.log('MID2 ', mid);
      return mid;
  } else if (target === nums[nums.length - 1]) {
      return nums.length - 1;
  } else if (nums.length <= 3) {
      return -1;
  }

  if (nums[mid] > nums[0]) {
      if (target < nums[0] || target > nums[mid]) {
          // search right, return index + 1 + mid
          let index = search(nums.slice(mid + 1), target);
          if (index === -1) {
              return -1
          } else {
              return index + mid + 1;
          }
      }
      if (target > nums[0] && target < nums[mid]) {
          // search left, return index
          return search(nums.slice(0, mid), target);
      }
  }

  if (nums[mid] < nums[0]) {
      if (target < nums[mid] || target > nums[0]) {
          //search left, return index
          return search(nums.slice(0, mid), target);
      } else if (target > nums[mid] && target < nums[nums.length - 1]) {
          // search right, return index + 1 + mid
          let index = search(nums.slice(mid + 1), target);
          if (index === -1) {
              return -1
          } else {
              return index + mid + 1;
          }
      } else {
          return -1;
      }
  }

};