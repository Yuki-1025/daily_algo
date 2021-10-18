// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and
//ignoring cases.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

var isPalindrome = function(s) {
  // use regex remove non-alphanumeric characters
  var pure = s.replace(/[^a-z0-9]/gi, '');
  pure = pure.toLowerCase();
  //console.log(pure)

  // iteration
  let start = 0, end = pure.length - 1;
  let mid = Math.floor(end/2);
  while (start <= mid && end > mid) {
      if (pure[start] !== pure[end]) {
          return false;
      }
      start ++;
      end --;
  }
  return true;
};