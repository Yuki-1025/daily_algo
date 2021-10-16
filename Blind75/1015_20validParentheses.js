// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Use STACK
var isValid = function(s) {
  // first, length must be even to close
  if (s.length % 2 !== 0) { return false; }
  //var pairA = '()', pairB = '[]', pairC = '{}';
  var open = '({[';
  var close = ')}]';
  var isOpen = false, curr = [];
  for (let i = 0; i < s.length; i ++) {
      if (open.indexOf(s[i]) !== -1) {
          isOpen = true;
          curr.push(s[i]);
      }
      if (close.indexOf(s[i]) !== -1) {
          if (!isOpen) { return false; }
          else if (curr[curr.length - 1] === '(' && s[i] === ')') {
              curr.pop();
              if (checkStack(curr)) {
                  isOpen = false;
              }
          } else if (curr[curr.length - 1] === '[' && s[i] === ']') {
              curr.pop();
              if (checkStack(curr)) {
                  isOpen = false;
              }
          } else if (curr[curr.length - 1] === '{' && s[i] === '}') {
              curr.pop();
              if (checkStack(curr)) {
                  isOpen = false;
              }
          } else {
              return false;
          }
      }
  }
  if (curr.length === 0) {
      return true;
  }
  return false;

};
const checkStack = (arr) => {
  if (arr.length === 0) {
      return true;
  }
  return false;
}
