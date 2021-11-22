// Given two positive integers n and k.

// A factor of an integer n is defined as an integer i where n % i == 0.

// Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

// Input: n = 12, k = 3
// Output: 3
// Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.

// brutal force O(n)
var kthFactor = function(n, k) {
  // edge
  if (k > n) return -1;

  for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
          k --;
          if (k === 0) return i;
      }
  }
  return -1;
};

// O(sqrt n)
var kthFactor = function(n, k) {
  // edge
  if (k > n) return -1;
  var root = Math.floor(Math.sqrt(n));
  for (let i = 1; i <= root; i++) {
      if (n % i === 0) {
          k --;
          if (k === 0) return i;
      }
  }
  if (root **2 === n) root --;
  for (let i = root; i > 0; i --) {
      if (n % i === 0) {
          k --;
          if (k === 0) return n/i;
      }
  }
  return -1;
};