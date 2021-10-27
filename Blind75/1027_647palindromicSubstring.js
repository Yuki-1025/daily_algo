// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// dynamic programming O(n^2)
var countSubstrings = function(s) {
  // create a 2-D matrix
  var memo = Array(s.length).fill(0).map((row) => {
      return Array(s.length).fill(0);
  });
  // single char
  memo.forEach((row, i) => {
      row.forEach((col, j) => {
          if (i === j) {
              memo[i][j] = 1;
          }
      })
  })
  //console.log(memo);
  // 2 chars
  for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === s[i + 1]) {
          memo[i][i+1] = 1;
      }
  }
  // for 3 chars and more
  for (let k = 2; k < s.length; k++) {
      for (let i = 0; i + k < s.length; i++) {
          memo[i][i+k] = memo[i+1][i+k-1] && s[i] === s[i+k];
      }
  }
  // sum 1s/true
  var output = 0
  for (let row = 0; row < memo.length; row ++) {
      for (let col = 0; col < memo.length; col ++) {
          if (memo[row][col]) {
              output ++;
          }
      }
  }
  return output;
};
