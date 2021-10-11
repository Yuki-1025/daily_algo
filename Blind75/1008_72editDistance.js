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

//Levenshtein Distance

var minDistance = function(word1, word2) {
  if (!word1.length && !word2.length) { return 0; }
  if (!word1.length || !word2.length) {
      return word1.length || word2.length;
  }
  // create a matrix to store intermediate result;
  var memo = Array(word1.length + 1).fill(0).map((row) => {
      return Array(word2.length + 1).fill(0);
  })
  //
  memo.forEach((row, i) => {
      row[0] = i;
  })
  for (let j = 0; j < memo[0].length; j ++) {
      memo[0][j] = j;
  }
  //console.log(memo);
  // calcalate each empty cell based on its adjacent cells
  for (let row = 1; row < memo.length; row ++) {
      for (let col = 1; col < memo[0].length; col ++) {
          let a = memo[row-1][col] + 1;
          let b = memo[row][col-1] + 1;
          let c = memo[row-1][col-1]; // replacement
          if (word1[row - 1] !== word2[col - 1]) { c++ ;} // if letters are the same, no need replace
          memo[row][col] = Math.min(a, b, c)
      }
  }
  //console.log(memo);
  return memo[word1.length][word2.length];

};