// A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly none).

// You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.

// Return the minimum number of flips to make s monotone increasing.

// Input: s = "00110"
// Output: 1
// Explanation: We flip the last digit to get 00111.

// Input: s = "010110"
// Output: 2
// Explanation: We flip to get 011111, or alternatively 000111.

var minFlipsMonoIncr = function(s) {
  // edge
  if (s.length < 2) return 0;
  //count 1s and 0s on each position
  var len = s.length;
  var ones = Array(len);
  var zeros = Array(len);
  for (let i = 0; i < len; i ++) {
      let previous = i === 0? 0 : ones[i-1];
      if (s[i] === '1') {
          ones[i] = previous + 1
      } else {
          ones[i] = previous;
      }
  }
  for (let i = len-1; i >= 0; i--) {
      let previous = i === len-1? 0: zeros[i+1]
      if (s[i] === '0') {
          zeros[i] = previous + 1;
      } else {
          zeros[i] = previous;
      }
  }
  // find minimum flips
  var min = Infinity;
  for (let i = 0; i <= len; i++) {
      // we set | between i-1 and i 之间, which means we need ones[i-1] to be zeros and zeros[i] to be one
      if (i === 0) min = Math.min(min, zeros[0]);
      else if (i === len) min = Math.min(min, ones[len-1]);
      else min = Math.min(min, zeros[i] + ones[i-1]);
  }
  return min;
};
