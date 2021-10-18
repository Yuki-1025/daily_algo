// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
// Input: s = "cbbd"
// Output: "bb"
// Example 3:
// Input: s = "a"
// Output: "a"

// dynamic programming O(n^2)
var longestPalindrome = function(s) {
  // edge case
  if (s.length <= 1) {
      return s;
  }
  // create a 2-D matrix to store intermediate results
  var memo = Array(s.length).fill(0).map((row) => {
      return Array(s.length).fill(0);
  });
  // fill in base cases
    // one letter
  var max = 1, output = s[0];
  memo.forEach((row, i) => {
    row.forEach((col, j) => {
        if (i === j) {
            row[j] = 1;
        }
    })
  });
    // two adjacent letters
  for (let i = 0; i < s.length - 1; i++) {
    if(s[i] === s[i+1]) {
        memo[i][i+1] = 1;
        max = 2;
        output = s.slice(i, i + 2);
    }
  }
  // handle length >=3
  for (let k = 2; k < s.length - 1; k ++) {
    for (let start = 0; start < s.length - k; start++) {
      let end = start + k;
      memo[start][end] = memo[start + 1][end - 1] && s[start] === s[end];
      if (memo[start][end]) {
          if (k + 1 > max) {
              max = k+1;
              output = s.slice(start, end + 1);
          }
      }
    }
  }
  return output;
}

//=======brutal force O(n^3)====================================
var longestPalindrome = function(s) {
  var result = '', max = 0;
  for (let i = 0; i < s.length; i++) {
      for (let j = s.length - 1; j >= i; j--) {
          let curr = s.slice(i, j+1)
          if(isPalindrome(curr)) {
              if (curr.length > max) {
                  max = curr.length;
                  result = curr;
              }
             break;
          }
      }
  }
  return result;
};

var isPalindrome = function(s) {
//s = s.replace(/[^0-9a-z]/gi, '');
s = s.toLowerCase();
return s.split('').reverse().join('') === s;
};