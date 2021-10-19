// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
//n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
//Find two lines, which, together with the x-axis forms a container, such that the container contains
//the most water.

// Notice that you may not slant the container.
// O(n)
var maxArea = function(height) {
  //edge
  if (height.length <= 1) {
      return 0;
  }
  // two pointers
  var max = 0, area;
  var start = 0, end = height.length - 1;
  while (start < end) {
      let minH = Math.min(height[start], height[end]);
      area = (end - start) * minH;
      if (area > max) { max = area; }
      while (height[start] <= minH && start < end) {
          start++;
      }
      while (height[end] <= minH && end > start) {
          end--;
      }
  }
  return max;
};

// brutal force======================================
var maxArea = function(height) {
  //edge
  if (height.length <= 1) {
    return 0;
  }
  var max = 0, area;
  for (let i = 0; i < height.length - 1; i ++) {
      for (let j = i + 1; j < height.length; j ++) {
          area = (j - i) * Math.min(height[i], height[j]);
          if ( area > max) {
              max = area;
          }
      }
  }
  return max;
};