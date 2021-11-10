// Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.

// A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats";
"dogcatsdog" can be concatenated by "dog", "cats" and "dog";
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

// USE TRIE is WAY efficient



// sort then use WordBreak for individual word.
//======Time exceeds when large input==========================
var findAllConcatenatedWordsInADict = function(words) {
  //edge
  if (words.length < 3) return [];
  // sort by length
  words.sort((a, b) => {
      return a.length - b.length
  })
  var res  = [];
  var minLen = words[1].length + words[0].length;
  for (let i = 2; i < words.length; i++) {
      let curr = words[i];
      if (curr.length < minLen) continue;
      if (wordBreak(curr, words.slice(0, i))) res.push(curr);
  }
  return res;
};

var wordBreak = function(word, dict) {
  var memo = Array(word.length + 1).fill(false);
  memo[0] = true;

  for (let i = 0; i < word.length; i++) {
      for (let j = i; j >= 0; j--) {
          if (dict.indexOf(word.slice(j, i+1)) > -1 && memo[j]) {
              memo[i+1] = true;
              break;
          }
      }
  }
  return memo[word.length];
}