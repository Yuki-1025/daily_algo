// Regular Expressions in JS
// to create re, use //
let re = /ab+c/
//OR
let re = new RegExp('ab+c'); //use this one when your pattern will be changing

// direct match:
/abc/
// to match a single a followed by 0 or more bs followed by c
/ab*c/
/ab+c/ // one b or more
/b?/   // 0b or 1b
/a{2}/ // must be exact 2a
/a{2,}/ // at least 2a
/a{1,3}/ // at least 1a, at most 3a

// beginning of an input: ^; input starts with A
/^A/
// input end flag: $; input ends with t
/t$/

// word boundary: \b;
/\bm/  //word starts with m
/oo\b/ // word ends with oo

// .: matches any single character except line terminators: \n, \r
\d // digital 0-9
\D // any character not digital
\w: //Matches any alphanumeric character and underscore [A-Za-z0-9_]


// Question: given a list of strings made up of the characters 'a' and 'b', create a regular expression
// that will match strings that begin abnd end with the same letter

//example:
// 'a', 'aa', 'bababbb' return true
// 'ab', 'baba' return false

function validateStrings (str) {
  if (str.length === 1) { return true; }
  let re1 = /^a.*a$/;
  let re2 = /^b.*b$/;
  return re1.test(str) || re2.test(str);
}

function validateStrings (str) {
  let start = str[0];
  let re = new RegExp(start + '$');
  return re.test(str);
}