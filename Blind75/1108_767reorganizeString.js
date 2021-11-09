//Given a string s, rearrange the characters of s so that any two adjacent characters are not
//the same.
//Return any possible rearrangement of s or return "" if not possible.

Input: s = "aab"
Output: "aba"

Input: s = "aaab"
Output: ""

var reorganizeString = function(s) {
  // create a map to store frequency
  var map = {};
  for (let i = 0; i < s.length; i++) {
      if (!map[s[i]]) map[s[i]] = 0;
      map[s[i]] ++;
  }
  var sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
  // too many the most frequent char
  if (sorted[0][1] > Math.ceil(s.length / 2)) return '';
  //console.log(sorted);
  var pos = 0;
  var res = [];
  for (let i = 0; i < sorted.length; i++) {
      let char = sorted[i][0];
      let count = sorted[i][1];
      let j = 0;
      //if (pos > s.length) pos = 1;
      while (j < count) {
          if (pos >= s.length) pos = 1;
          res[pos] = char;
          pos += 2;
          j++;
      }
  }
  return res.join('');
};