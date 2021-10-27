// Given an array nums with n objects colored red, white, or blue, sort them in-place so
// that objects of the same color are adjacent, with the colors in the order red, white,
//and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue,
// respectively.

// You must solve this problem without using the library's sort function.

// write your own sort
// try bubble sort (in place)
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