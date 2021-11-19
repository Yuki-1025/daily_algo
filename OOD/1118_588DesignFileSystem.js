// Design a data structure that simulates an in-memory file system.

// Implement the FileSystem class:

// FileSystem() Initializes the object of the system.
// List<String> ls(String path)
// If path is a file path, returns a list that only contains this file's name.
// If path is a directory path, returns the list of file and directory names in this directory.
// The answer should in lexicographic order.
// void mkdir(String path) Makes a new directory according to the given path. The given directory path does not exist. If the middle directories in the path do not exist, you should create them as well.
// void addContentToFile(String filePath, String content)
// If filePath does not exist, creates that file containing given content.
// If filePath already exists, appends the given content to original content.
// String readContentFromFile(String filePath) Returns the content in the file at filePath.

// Input
// ["FileSystem", "ls", "mkdir", "addContentToFile", "ls", "readContentFromFile"]
// [[], ["/"], ["/a/b/c"], ["/a/b/c/d", "hello"], ["/"], ["/a/b/c/d"]]
// Output
// [null, [], null, null, ["a"], "hello"]

// Explanation
// FileSystem fileSystem = new FileSystem();
// fileSystem.ls("/");                         // return []
// fileSystem.mkdir("/a/b/c");
// fileSystem.addContentToFile("/a/b/c/d", "hello");
// fileSystem.ls("/");                         // return ["a"]
// fileSystem.readContentFromFile("/a/b/c/d"); // return "hello"

var FileSystem = function() {
  this.storage = {};
};
/**
* @param {string} path
* @return {string[]}
*/
FileSystem.prototype.ls = function(path) {
  path = path.split('/');
  let curr;
  for (let i = 0; i < path.length; i++) {
      if (path[i] === '') {
          curr = this.storage;
      }
      if (i === path.length-1) {
          if (curr[path[i]] && curr[path[i]].contents) {
              return [path[i]];
          }
      }
      if (curr[path[i]]) {
          curr = curr[path[i]]
      }
  }
  let res = Object.keys(curr).sort((a, b) => a.localeCompare(b));
  return res;
};

/**
* @param {string} path
* @return {void}
*/
FileSystem.prototype.mkdir = function(path) {
  path = path.split('/');
  let curr;
  for (let p of path) {
      if (p === '') {
          curr = this.storage;
      } else {
          if(!curr[p]) curr[p] = {};
          curr = curr[p];
      }
  }
};

/**
* @param {string} filePath
* @param {string} content
* @return {void}
*/
FileSystem.prototype.addContentToFile = function(filePath, content) {
  let path = filePath.split('/');
  let curr;
  for (let p of path) {
      if (p === '') {
          curr = this.storage;
      } else {
          if(!curr[p]) curr[p] = {};
          curr = curr[p];
      }
  }
  if (!curr.contents) curr.contents = '';
  curr.contents += content;
};

/**
* @param {string} filePath
* @return {string}
*/
FileSystem.prototype.readContentFromFile = function(filePath) {
  let path = filePath.split('/');
  let curr;
  for (let p of path) {
      if (p === '') {
          curr = this.storage;
      } else {
          if(curr[p]) curr = curr[p];
      }
  }
  return curr.contents;
};
