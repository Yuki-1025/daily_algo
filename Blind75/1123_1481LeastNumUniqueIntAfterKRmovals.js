// Given an array of integers arr and an integer k. Find the least number of unique integers
// after removing exactly k elements.

// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.

var findLeastNumOfUniqueInts = function(arr, k) {
  // edge
  if (k >= arr.length) return 0;
  // store each num's count
  var freq = {};
  for (let num of arr) {
      if (!freq[num]) freq[num] = 0;
      freq[num] ++;
  }
  // remove starting from the num with the least count
  var ordered = Object.entries(freq).sort((a, b) => a[1] - b[1]);
  let len = ordered.length;
  for (let [num, count] of ordered) {
      if (k >= count) {
          len --;
          k -= count;
      } else {
          break;
      }
  }
  return len;
};