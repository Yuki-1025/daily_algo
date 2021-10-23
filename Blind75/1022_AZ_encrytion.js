// example
// encrypted = 'VTAOG'; k = 2;
// return: 'TRYME'

var solveEncrypted = (str, k) => {
  var output = '';
  for (let i = 0; i < str.length; i++ ) {
    output += helper(str[i], k);
  }
  return output;
}

const helper = (letter, k) => {
  var dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let n = 0; n < 26; n++) {
    if (dict[n] === letter) {
      if (n - k >= 0) {
        return dict[n - k];
      } else {
        return dict[(n - k) % 26 + 26];
      }
    }
  }
}