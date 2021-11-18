// Give a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they occur.

// Input: s = "00110011"
// Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011",
// "01", "1100", "10", "0011", and "01".

//O(n^2)
var countBinarySubstrings = function(s) {
  var res = 0;
  var countA;
  for (let i = 0; i < s.length-1; i ++) {
      let curr = s[i];
      countA = 1;
      for (let j = i + 1; j < s.length; j++) {
          if (s[j] === curr) {
              countA ++;
          } else {
              //countA--;
              while (countA > 0 && j<s.length && s[j] !== curr) {
                  j++;
                  countA --;
              }
              //console.log(s.slice(i, j))
              if (!countA) res ++;
              break;
          }
      }
  }
  return res;
};