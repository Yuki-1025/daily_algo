//Given a string s, find the length of the longest substring without repeating characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

var lengthOfLongestSubstring = function(s) {
  // two pointers
  //var start = 0, end = start + 1;
  var max = 0;
  for (let start = 0; start < s.length; start ++) {
      var obj = {};
      for (let end = start; end < s.length; end ++) {
          if (obj[s[end]] === undefined) {
              obj[s[end]] = 1;
              max = Math.max(max, end - start + 1)
          } else {
              break;
          }
      }
  }
  return max;
};