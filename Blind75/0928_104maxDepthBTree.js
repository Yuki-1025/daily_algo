// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down
//to the farthest leaf node.

// input: an array of numbers/BINARY TREE
// output: number, maximum depth
// edge cases: [] => 0;

var maxDepth = function(root) {
  // base case
  if (root === null) {
      return 0;
  }
  // recursive
  // maxDepth(root.left); //9
  // maxDepth(root.right); // [20 15 7]

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// mathematical approach
var maxDepth = function(root) {
  var len = root.length;
  // console.log('len ', root.length);
  if (len === 0) {
      return 0;
  }

  //
  var n = 0;
  var sum = 0;
  while (sum < 10000) {
      sum += 2 ** n;
      // console.log('sum ', sum);
      n++;
      if (sum === len) {
          return n;
      }
  }
};

