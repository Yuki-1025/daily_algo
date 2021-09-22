//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two
// integers m and n, representing the number of elements in nums1 and nums2 respectively.

// input: arr1, arr2, m, n; arr1.length = m + n, arr2.length = n
// output: arr1
// edge cases: arr2=[]; arr1=[];
// complexity: O(n log n)

var merge = function(nums1, m, nums2, n) {
  for (let i = m; i < m + n; i ++) {
      nums1[i] = nums2[i - m];
  }
  nums1.sort((a, b) => {
      return a - b;
  })
  return nums1;
};

// complexity O(n + m)
var merge = function(nums1, m, nums2, n) {
  var i = 0, j = 0;
  var result = [];
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j ++;
    }
  }
  if (i < m) {
    while (i < m) {
      result.push(nums1[i]);
        i++;
    }
  }
  if (j < n) {
    while (j < n) {
      result.push(nums2[j]);
      j++;
    }
  }
    for (let k = 0; k < nums1.length; k++) {
        nums1[k] = result[k];
    }
};