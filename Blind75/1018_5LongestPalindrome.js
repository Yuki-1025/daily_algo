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
// Example 4:
// Input: s = "ac"
// Output: "a"

// dynamic programming


//=======brutal force O(n^2)=====
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