// Let's define a function countUniqueChars(s) that returns the number of unique characters on s.

// For example if s = "LEETCODE" then "L", "T", "C", "O", "D" are the unique characters since they appear only once in s, therefore countUniqueChars(s) = 5.
// Given a string s, return the sum of countUniqueChars(t) where t is a substring of s.

// Notice that some substrings can be repeated so in this case you have to count the repeated ones too.

// Input: s = "ABC"
// Output: 10
// Explanation: All possible substrings are: "A","B","C","AB","BC" and "ABC".
// Evey substring is composed with only unique letters.
// Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10

// SIMILAR TO FIND THE MIN OF EVERY SUBARRAY ================================================
// Instead of counting all unique characters and struggling with all possible substrings,
// we can count for every char in S, how many ways to be found as a unique char.
// We count and sum, and it will be out answer.
Think about string "XAXAXXAX" and focus on making the second "A" a unique character.
We can take "XA(XAXX)AX" and between "()" is our substring.
We can see here, to make the second "A" counted as a uniq character, we need to:

insert "(" somewhere between the first and second A
insert ")" somewhere between the second and third A
For step 1 we have "A(XA" and "AX(A", 2 possibility.
For step 2 we have "A)XXA", "AX)XA" and "AXX)A", 3 possibilities.

So there are in total 2 * 3 = 6 ways to make the second A a unique character in a substring.
In other words, there are only 6 substring, in which this A contribute 1 point as unique string.

var uniqueLetterString = function(s) {
  var res = 0;
  var pos = {};
  // loop the s once to store locations
  for (let i = 0; i < s.length; i++) {
      if (!pos[s[i]]) pos[s[i]] = [];
      pos[s[i]].push(i);
  }
  let len = s.length;
  //let mod = 1e9 +7;
  for (let key in pos) {
      let last = -1;
      for (let i = 0; i < pos[key].length; i++) {
          let next = pos[key][i+1] === undefined? len:pos[key][i+1];
          res = (res + (pos[key][i] - last) * (next - pos[key][i]));
          last = pos[key][i];
      }
  }

  return res;
};

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