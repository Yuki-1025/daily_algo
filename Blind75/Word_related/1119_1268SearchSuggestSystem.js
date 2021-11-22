// Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

// Return list of lists of the suggested products after each character of searchWord is typed.

// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [
// ["mobile","moneypot","monitor"],
// ["mobile","moneypot","monitor"],
// ["mouse","mousepad"],
// ["mouse","mousepad"],
// ["mouse","mousepad"]
// ]
// Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
// After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
// After typing mou, mous and mouse the system suggests ["mouse","mousepad"]

// Input: products = ["havana"], searchWord = "havana"
// Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]

// Input: products = ["havana"], searchWord = "tatiana"
// Output: [[],[],[],[],[],[],[]]

// brutal force - REGEX
var suggestedProducts = function(products, searchWord) {
  var res = [];
  products.sort((a, b) => a.localeCompare(b));
  for (let i = 1; i <= searchWord.length; i++) {
      let curr = searchWord.slice(0, i);
      let re = new RegExp('^' + curr);
      let matched = products.filter((el) => re.test(el));
      if (matched.length > 3) {
          matched = matched.slice(0, 3);
      }
      res.push(matched);
  }
  return res;
};

// TRIE
var suggestedProducts = function(products, searchWord) {
  // build trie with products
  var trie = {};
  for (let p of products) {
      let curr = trie;
      for (let char of p) {
          if (!curr[char]) curr[char] = {};
          curr = curr[char];
      }
      curr.end = p;
  }

  var traverse = (node) => {
      var ends = new Set();
      var dfs = (node) => {
          if (Object.keys(node).length === 1 && Object.keys(node)[0] === 'end') {
              //console.log(node.end)
              ends.add(node.end);
              return;
          }
          if (node.end) {

              ends.add(node.end);
          }

          for (let k in node) {
              if (k !== 'end') {
                  dfs(node[k]);
              }
          }
      }
      dfs(node);
      let arr = [...ends].sort((a, b) => a.localeCompare(b)).slice(0,3);
      return arr;
  }

  var res = [];
  let currNode = trie;
  for (let i = 0; i < searchWord.length; i++) {
      if (currNode[searchWord[i]]) {
          currNode = currNode[searchWord[i]];
          //console.log(currNode)
          res.push(traverse(currNode));
      } else {
          while (i < searchWord.length) {
              res.push([]);
              i++;
          }
          break;
      }
  }
  return res;
};