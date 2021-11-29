// Given a binary array data, return the minimum number of swaps required to group all 1’s
// present in the array together in any place in the array.

// Input: data = [1,0,1,0,1]
// Output: 1
// Explanation:
// There are 3 ways to group all 1's together:
// [1,1,1,0,0] using 1 swap.
// [0,1,1,1,0] using 2 swaps.
// [0,0,1,1,1] using 1 swap.
// The minimum is 1.

// sliding window, compare the newly coming ele with the newly lost ele
var minSwaps = function(data) {
  // count ones
  var k = countOnes(data);
  if (k <= 1) return 0;
  // k as the subarray length
  let count = k - countOnes(data.slice(0, k));
  let min = count;
  let preStart = data[0], preEnd = data[k-1];
  for (let i = 1; i <= data.length - k; i++) {
      let j = i + k - 1;
      if (data[j] > preStart) {
          count --;
          min = Math.min(min, count);
      } else if (data[j] < preStart) {
          count ++;
      }
      preStart = data[i];
  }
  return min;
};

var countOnes = (arr) => {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) count ++;
  }
  return count;
}