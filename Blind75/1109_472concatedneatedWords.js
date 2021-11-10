// Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.

// A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

// Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
// Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats";
// "dogcatsdog" can be concatenated by "dog", "cats" and "dog";
// "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

// USE TRIE is WAY efficient

// use SET to avoid linear searching
var findAllConcatenatedWordsInADict = function(words) {
  var dict = new Set(words);

  var dfs = (word, count) => {
      if (!word.length && count > 1) return true;
      if (!word.length) return false;
      let temp = '';
      for (let i = 0; i < word.length; i++) {
          temp += word[i];
          if (dict.has(temp)) {
              if (dfs(word.slice(i + 1), count + 1)) {
                  return true;
              }
          }
      }
      return false;
  }

  var res = [];
  for (let word of words) {
      if (dfs(word, 0)) res.push(word);
  }
  return res;
}

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

// =======FOR AMAZON Q=======================================================
// Input: [rockstar, rock, stars, rocks, tar, star, rockstars, super, highway, high, way, superhighway]

// Output: [[rock, star], [rocks, tar], [super, highway], [super, high, way],...]
var findAllConcatenatedWordsInADict = function(words) {
  var dict = new Set(words);
  var res = [];

  var dfs = (word, count, subs) => {
      if (!word.length && count > 1) res.push([...subs]);
      if (!word.length) return;
      let temp = '';
      for (let i = 0; i < word.length; i++) {
          temp += word[i];
          if (dict.has(temp)) {
              subs.push(temp);
              dfs(word.slice(i + 1), count + 1, subs);
              subs.pop();
          }
      }
  }

  for (let word of words) {
      dfs(word, 0, []);
  }
  return res;
}

//==================WRONG ANSWER (NOT COMPLETE) ===============================
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
      let comb = wordBreak(curr, words.slice(0, i));
      if (comb) res.push(comb);
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
  var output = [];
  if (memo[word.length]) {
      let last = 0;
      for (let i = 1; i < memo.length; i ++) {
        if (memo[i]) {
            output.push(word.slice(last, i));
            last = i;
        }
      }
  }
  return output.length === 0? false : output;
}

