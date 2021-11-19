// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array
//[0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

//two pointers O(n)
var trap = function(height) {
  var left = 0, right = height.length - 1;
  var maxL = 0, maxR = 0;
  var res = 0;
  while (left < right) {
      if (height[left] < height[right]) {
          height[left] >= maxL ? maxL = height[left] : res += maxL - height[left];
          left ++;
      } else {
          height[right] >= maxR ? maxR = height[right] : res += maxR - height[right];
          right --;
      }
  }
  return res;
}