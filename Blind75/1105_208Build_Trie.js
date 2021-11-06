// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a
// dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false
//otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix,
// and false otherwise.

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True

var Trie = function() {
  this.storage = {};
};

/**
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  this.storage[word] = word;
};

/**
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  if (this.storage[word]) {
      return true;
  } else {
      return false;
  }
};

/**
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let words = Object.values(this.storage);
  for (let w of words) {
      if (w.indexOf(prefix) === 0) return true;
  }
  return false;
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/