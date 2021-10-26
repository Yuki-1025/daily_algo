// You are given a string s and an integer k. You can choose any character of the string
//and change it to any other uppercase English character. You can perform this operation
//at most k times.

// Return the length of the longest substring containing the same letter you can get after
// performing the above operations.

// # use a "character counter" to keep track of acceptable substring length
// # the acceptable substring length is equal to
// # len(substring) - max(character count)
// # e.g. "BBBA" = 4 - 3 = 1
// two pointers

var characterReplacement = function(s, k) {
  var start = 0, end = 0;
  var max = 0;
  var counter = {};

  while (end < s.length) {
    if (!counter[s[end]]) {
      counter[s[end]] = 1;
    } else {
      counter[s[end]] ++;
    }
    while (end - start + 1 - Math.max.apply(null, Object.values(counter)) > k && start <= end) {
      counter[s[start]] --;
      start ++;
    }
    max = Math.max(max, end - start + 1);
    end ++;

  }
  return max;
};
