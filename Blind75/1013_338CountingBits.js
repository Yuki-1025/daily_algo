// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
// ans[i] is the number of 1's in the binary representation of i.

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// SOLUTION I: BIT MANIPULATION
var countBits = function(n) {
  var output = [];
  for (let i = 0; i <= n; i ++) {
      output.push(checkOnes(i));
  }
  return output;
};

const checkOnes = (num) => {
  var count = 0;
  while (num !== 0) {
      count += num & 1;
      num = num >>> 1
  }
  return count;
}

// SOLUTION II: STRING METHOD: use toString(2): 二进制string
const checkOne = (str) => {
  var count = 0;
  for (let i = 0; i < str.length; i ++) {
      if (str[i] === '1') {
          count ++;
      }
  }
  return count;
}

var countBits = function(n) {
  var binary = [];
  for (let i = 0; i <= n; i++) {
      binary.push(checkOne(i.toString(2)));
  }
  return binary;
};