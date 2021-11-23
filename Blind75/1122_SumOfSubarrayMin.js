// Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous)
// subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

// Input: arr = [3,1,2,4]
// Output: 17
// Explanation:
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// Sum is 17.

// O (n^2), could improve to O(n) using monotone stack
var sumSubarrayMins = function(arr) {
  // create arr left and right to store the distance of the curr ele to the closest smaller ele
  var left = Array(arr.length);
  var right = Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
      let j = i - 1;
      while (j >= 0 && arr[i] < arr[j]) {
          j --;
      }
      left[i] = i - j;

      let k = i + 1;
      while (k < arr.length && arr[k] >= arr[i]) {
          k ++;
      }
      right[i] = k - i;
  }

  var res = 0, mod = 1e9 + 7;
  for (let i = 0; i < arr.length; i++) {
      res = (res + arr[i] * left[i] * right[i]) % mod;
  }
  return res;
};