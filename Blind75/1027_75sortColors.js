// Given an array nums with n objects colored red, white, or blue, sort them in-place so
// that objects of the same color are adjacent, with the colors in the order red, white,
//and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue,
// respectively.
// You must solve this problem without using the library's sort function.

// DUTCH NATIONAL FLAG Algorithm to sort in one pass | No extra space
// This algorithm uses 3 pointers : low , mid and high.
// Initially low and mid pointers are placed at starting index of the array whereas high is placed at the end of the array.
// This algorithm is based on the fact that all elements to the left of low are 0 and all elements to the right of high are 2.
// We will use mid pointer to traverse over the array (till it crosses high pointer).
// Their are 3 possibilities :
// nums[mid] = 0 : We will swap values at index low and mid. Also will increment both low and mid pointer.
// nums[mid] = 1 : just move mid pointer by 1.
// nums[mid] = 2 : We will swap values at high and mid. Also decrement high pointer.
var sortColors = function(nums) {
  // 3 pointers
   var low = 0, high = nums.length - 1, mid = 0;
   // use mid to loop through the array, low and high to store 0 and 2
   while (mid <= high) {
       if (nums[mid] === 0) {
           nums[mid] = nums[low];
           nums[low] = 0;
           low ++;
           mid ++;
       } else if (nums[mid] === 2) {
           nums[mid] = nums[high];
           nums[high] = 2;
           high -- ;
       } else {
           mid ++;
       }
   }
   return nums;
}

// write your own sort
// try bubble sort (in place)
// worst O(n^2), best O(n)
var sortColors = function(nums) {
  var isSwaped = false;
  var swap = (arr) => {
      for (let i = 0; i < arr.length - 1; i ++) {
          if (arr[i] > arr[i+1]) {
              isSwaped = true;
              let temp = arr[i];
              arr[i] = arr[i+1];
              arr[i+1] = temp;
          }
      }
  }
  swap(nums);
  if (!isSwaped) {
      return nums;
  } else {
      sortColors(nums);
  }
}