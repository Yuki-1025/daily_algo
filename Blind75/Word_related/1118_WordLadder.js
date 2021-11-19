// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

// OPTIMAL SOLUTION ==============================================================
var ladderLength = function(beginWord, endWord, wordList) {
  // edge: endword not exist
  if (wordList.indexOf(endWord) === -1) return 0;
  // BFS
  var dict = new Set(wordList);

  var q = [beginWord], level = 1, nextq = [];
  while (q.length) {
      let curr = q.shift();
      if (curr === endWord) return level;
      for (let i = 0; i < curr.length; i++) {
          for (let letter = 0; letter < 26; letter ++) {
              let newWord = curr.slice(0, i) + String.fromCharCode(letter + 97) + curr.slice(i+1);
              if (dict.has(newWord)) {
                  nextq.push(newWord);
                  dict.delete(newWord)
              }
          }
      }
      if (!q.length) {
          level ++;
          q = nextq;
          nextq = [];
      }
  }
  return 0;
};

// CORRECT BUT RUNTIME EXCEED============================================================
var ladderLength = function(beginWord, endWord, wordList) {
  // edge: endword not exist
  if (wordList.indexOf(endWord) === -1) return 0;
  // BFS
  //for record
  var visited = {};
  for (let w of wordList) visited[w] = false;
  //visited[beginWord] = false;
  var q = [beginWord], level = 1, nextq = [];
  while (q.length) {
      //console.log(q, level)
      let curr = q.shift();
      visited[curr] = true;
      if (curr === endWord) return level;
      let neighbors = helper(curr, wordList, visited);
      if (neighbors.length) {
          for (let n of neighbors) {
              nextq.push(n);
          }
      }
      if (!q.length) {
          level ++;
          q = nextq;
          nextq = [];
      }
  }
  return 0;
};

var helper = (word, dict, visit) => {
  var res = [];
  for (let d of dict) {
      if (!visit[d]) {
          let counter = 0;
          for (let i = 0; i < d.length; i++) {
              if (d[i] !== word[i]) counter ++;
          }
          if (counter === 1) res.push(d)
      }
  }
  return res;
}