// You are given two sorted arrays of distinct integers nums1 and nums2.

// A valid path is defined as follows:

// Choose array nums1 or nums2 to traverse (from index-0).
// Traverse the current array from left to right.
// If you are reading any value that is present in nums1 and nums2 you are allowed to change your path to the other array. (Only one repeated value is considered in the valid path).
// The score is defined as the sum of uniques values in a valid path.

// Return the maximum score you can obtain of all possible valid paths. Since the answer may be too large, return it modulo 109 + 7.

// Input: nums1 = [2,4,5,8,10], nums2 = [4,6,8,9]
// Output: 30
// Explanation: Valid paths:
// [2,4,5,8,10], [2,4,5,8,9], [2,4,6,8,9], [2,4,6,8,10],  (starting from nums1)
// [4,6,8,9], [4,5,8,10], [4,5,8,9], [4,6,8,10]    (starting from nums2)
// The maximum is obtained with the path in green [2,4,6,8,10].

// find same num in 2 array
// calculate segmented sum divided by the same num
//choose largest sum
var maxSum = function(nums1, nums2) {
  var p1 = 0, p2 = 0;
  var sum1 = [], sum2 = [], temp1 = 0, temp2 = 0;
  while (p1 < nums1.length && p2 < nums2.length) {
      if (nums1[p1] === nums2[p2]) {
          temp1 += nums1[p1];
          temp2 += nums2[p2];
          sum1.push(temp1);
          sum2.push(temp2);
          temp1 = 0, temp2 = 0;
          p1++;
          p2++;
      } else if (nums1[p1] < nums2[p2]) {
          temp1 += nums1[p1];
          p1 ++;
      } else {
          temp2 += nums2[p2];
          p2 ++;
      }
  }
  if (p1 >= nums1.length) {
      sum1.push(temp1);
      while(p2 < nums2.length) {
          temp2 += nums2[p2];
          p2 ++;
      }
      sum2.push(temp2);
  } else if (p2 >= nums2.length) {
      sum2.push(temp2);
      while(p1 < nums1.length) {
          temp1 += nums1[p1];
          p1 ++;
      }
      sum1.push(temp1);
  }
  var res = 0, mod = 1e9 +7;
  for (let i = 0; i < sum1.length; i++) {
      res = (res + Math.max(sum1[i], sum2[i])) % mod;
  }
  return res;
};
