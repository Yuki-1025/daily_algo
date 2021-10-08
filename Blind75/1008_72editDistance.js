// Given two strings word1 and word2, return the minimum number of operations required to convert word1
// to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

var minDistance = function(word1, word2) {
  if (!word1.length && !word2.length) { return 0; }
  if (!word1.length || !word2.length) {
      return word1.length || word2.length;
  }
  // find the longest overlapped strings
  var overlap = [];
  for (let start = 0; start < word2.length; start++) {
      for (let end = word2.length - 1; end >= start; end --) {
          if (word1.indexOf(word2.substring(start, end + 1)) !== -1) {
              overlap.push(end + 1 - start); // push the length of overlapped part
          }
      }
  }

};