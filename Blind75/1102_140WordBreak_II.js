// Given a string s and a dictionary of strings wordDict, add spaces in s to construct a
// sentence where each word is a valid dictionary word. Return all such possible sentences
// in any order.

// Note that the same word in the dictionary may be reused multiple times in the
//segmentation.

Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
Output: ["cats and dog","cat sand dog"]
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: []

// BACK TRACKING
var wordBreak = function(s, wordDict) {
  var output = [];
  const findOneWord = (start, res) => {
      if (start < s.length) {
          for (let end = start + 1; end <= s.length; end ++) {
              let isWord = wordDict.indexOf(s.slice(start, end)) === -1? false : true;
              if (!isWord) continue;
              let temp = res;
              res += s.slice(start, end) + ' ';
              if (end === s.length) {
                  res = res.slice(0, res.length-1)
                  output.push(res);
                  return;
              }
              findOneWord(end, res);
              res = temp;
          }
      }
  }
  findOneWord(0, '');
  return output;
};