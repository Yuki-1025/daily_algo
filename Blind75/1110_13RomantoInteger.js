// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var romanToInt = function(s) {
  var count = {};
  var order = 'IVXLCDM';
  // create a count map first, in case some char doesn't show up in certain test cases
  for (let i = 0; i < order.length; i++) {
      count[order[i]] = 0;
  }
  for (let i = 0; i < s.length; i++) {
      //if (!count[s[i]]) count[s[i]] = 0;
      if (s[i+1]) { //s[i]不是最后一个char
          if (order.indexOf(s[i]) < order.indexOf(s[i+1])) { //顺序反了 说明要做减法
              count[s[i]] --;
          } else {
              count[s[i]] ++;
          }
      } else {
          count[s[i]] ++;
      }
  }
  //console.log(count);
  var num = 1000 * count['M'] + 500 * count['D'] + 100 * count['C'] +
      50 * count['L'] + 10 * count['X'] + 5 * count['V'] + count['I'];
  return num;
};

//==========SOLUTION II ==================================
var romanToInt = function(s) {
  var dict = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }
  var res = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i+1]) {
          if (dict[s[i]] < dict[s[i+1]]) {
              res -= dict[s[i]];
          } else {
              res += dict[s[i]];
          }
      } else {
          res += dict[s[i]];
      }
  }
  return res;
};