// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// O (n)
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
// O(nlogn)
var isAnagram = function(s, t) {
  let len = s.length
  if (t.length !== len) { return false; }

  var arrS = s.split('');
  var arrT = t.split('');
  arrS.sort((a, b) => {
      return a.localeCompare(b);
  })
  arrT.sort((a, b) => {
      return a.localeCompare(b);
  })

  for (let i = 0; i < len; i ++) {
      if (arrS[i] !== arrT[i]) {
          return false;
      }
  }
  return true;
};