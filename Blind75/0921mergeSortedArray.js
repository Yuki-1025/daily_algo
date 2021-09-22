//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two
// integers m and n, representing the number of elements in nums1 and nums2 respectively.

// input: arr1, arr2, m, n; arr1.length = m + n, arr2.length = n
// output: arr1
// edge cases: arr2=[]; arr1=[];
// complexity: O(n)

var merge = function(nums1, m, nums2, n) {
  for (let i = m; i < m + n; i ++) {
      nums1[i] = nums2[i - m];
  }
  nums1.sort((a, b) => {
      return a - b;
  })
  return nums1;
};