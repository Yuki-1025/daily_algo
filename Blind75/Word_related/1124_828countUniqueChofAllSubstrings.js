// Let's define a function countUniqueChars(s) that returns the number of unique characters on s.

// For example if s = "LEETCODE" then "L", "T", "C", "O", "D" are the unique characters since they appear only once in s, therefore countUniqueChars(s) = 5.
// Given a string s, return the sum of countUniqueChars(t) where t is a substring of s.

// Notice that some substrings can be repeated so in this case you have to count the repeated ones too.

// Input: s = "ABC"
// Output: 10
// Explanation: All possible substrings are: "A","B","C","AB","BC" and "ABC".
// Evey substring is composed with only unique letters.
// Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10

// ============= TIME EXCEED ====================================================
// brutal force - first find out all substrings, then calculate unique num for each
var uniqueLetterString = function(s) {
  var res = 0;
  for (let i = 0; i < s.length; i++) {
      for (let j = i ; j < s.length; j++) {
          let curr = s.slice(i, j+1);
          //console.log(curr);
          res += countUnique(curr);
      }
  }
  return res;
};

const countUnique = (word) => {
  let set = {};
  for (let ch of word.split('')) {
      if (set[ch] === undefined) {
          set[ch] = true;
      } else {
          set[ch] = false;
      }
  }
  //console.log(set);
  return Object.values(set).filter((a) => a).length;
}