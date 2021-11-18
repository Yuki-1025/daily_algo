// You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

// There are two types of logs:

// Letter-logs: All words (except the identifier) consist of lowercase English letters.
// Digit-logs: All words (except the identifier) consist of digits.
// Reorder these logs so that:

// The letter-logs come before all digit-logs.
// The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
// The digit-logs maintain their relative ordering.
// Return the final order of the logs.

// Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// Explanation:
// The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
// The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".

var reorderLogFiles = function(logs) {
  // edge
  if (logs.length <= 1) return logs;
  // change its format to identifier: [logs]
  var letter = [], digit = [];
  for (let l of logs) {
      let id = l.split(' ')[0];
      let log = l.split(' ').slice(1).join(' ');
      if (parseInt(log) || parseInt(log) === 0) {
          digit.push(l);
      } else {
          letter.push([id, log]);
      }
  }
  // sort the letterlog
  letter.sort((a, b) => {
      if (a[1] === b[1]) return a[0].localeCompare(b[0]);
      return a[1].localeCompare(b[1]);
  })
  // recover letter log format
  let newLetter = [];
  for (let l of letter) {
      newLetter.push(l.join(' '));
  }
  let res = newLetter.concat(digit);
  return res;
};