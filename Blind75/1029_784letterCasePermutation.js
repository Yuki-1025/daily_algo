// Given a string s, we can transform every letter individually to be lowercase or
//uppercase to create another string.
// Return a list of all possible strings we could create. You can return the output in
//any order.

var letterCasePermutation = function(s) {
  var output = [];
  var string = '';
  var n = 0;
  var helper = (n) => {
      if (n === s.length) {
          output.push(string);
          return;
      }
      if (n < s.length) {
          // if number
          if (!s[n].match(/[a-z]/i)) {
              let temp = string;
              string += s[n];
              n ++;
              helper(n);
              n--;
              string = temp;
          }
          else {
              //[upper, lower]
              let options = [s[n].toLowerCase(), s[n].toUpperCase()];
              for (let option of options) {
                  string += option;
                  n++;
                  helper(n);
                  n--;
                  string = string.slice(0, string.length - 1);
              }
          }

      }
   }
  helper(n);
  return output;
};