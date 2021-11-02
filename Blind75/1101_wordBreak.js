// Given a string s and a dictionary of strings wordDict, return true if s can be
//segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the
//segmentation.

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

var wordBreak = function(s, wordDict) {
  // create a memo to store intermediate results
  var memo = Array(s.length + 1).fill(false);
  memo[0] = true;

  for (let i = 0; i < s.length; i++) {
      for (let j = i; j >= 0; j--) {
          let currWord = s.slice(j, i + 1);
          let isWord = wordDict.indexOf(currWord) === -1? false : true;
          memo[i+1] = isWord && memo[j];
          if (memo[i+1]) break;
      }
  }
  //console.log(memo);
  return memo[memo.length - 1];
};