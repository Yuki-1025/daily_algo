// Given a string s, sort it in decreasing order based on the frequency of the characters. The
// frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

var frequencySort = function(s) {
  var map = {};
  for (let i = 0; i < s.length; i++) {
      if (!map[s[i]]) {
          map[s[i]] = 0;
      }
      map[s[i]]++;
  }
  // in order to sort
  let pairs = Object.entries(map);
  pairs.sort((a, b) => b[1]- a[1]); // in descending order
  //console.log(pairs);

  var res = '';
  for (let p = 0; p < pairs.length; p ++) {
      let curr = pairs[p];
      while (curr[1] > 0) {
          res += curr[0];
          curr[1] --;
      }
  }
  return res;
};