// Given an array of strings strs, group the anagrams together. You can return the answer
//in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or
// phrase, typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Input: strs = [""]
// Output: [[""]]

//for the worst case O(n^2)
var groupAnagrams = function(strs) {
  var visited = new Array(strs.length).fill(0);
  var output = [];
  for (let i = 0; i < strs.length; i ++) {
      if (!visited[i]) {
          var group = [];
          group.push(strs[i]);
          visited[i] = 1;
          for (let j = i + 1; j < strs.length; j++) {
              if (isAnagram(strs[i], strs[j])) {
                  group.push(strs[j]);
                  visited[j] = 1;
              }
          }
          output.push(group);
      }
  }
  return output;
};

var isAnagram = function(s, t) {
  let len = s.length;
  if (t.length !== len) { return false; }

  var dict = {};
  for (let i = 0; i < len; i ++) {
    if (!dict[s[i]]) {
        dict[s[i]] = 1;
    } else {
        dict[s[i]] ++;
    }
  }
  for (let i = 0; i < len; i++) {
    if (!dict[t[i]]) {
        return false;
    } else {
        dict[t[i]] --;
    }
  }
  for (let k in dict) {
    if (dict[k]) {
        return false;
    }
  }
  return true;
}