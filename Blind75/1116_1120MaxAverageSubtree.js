// Given the root of a binary tree, return the maximum average value of a subtree of that tree.
// Answers within 10-5 of the actual answer will be accepted.

// A subtree of a tree is any node of that tree plus all its descendants.

// The average value of a tree is the sum of its values, divided by the number of nodes.

var maximumAverageSubtree = function(root) {
  if (root == null) return null;
  // traverse the tree
  var max = -Infinity;
  var q = [root];
  while (q.length) {
      let curr = q.shift();
      max = Math.max(treeAverage(curr), max);
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
  }
 return max;
};

var treeAverage = function(root) {
  var sum = 0;
  var count = 0;
  var q = [root];
  while (q.length) {
      let curr = q.shift();
      count ++;
      sum += curr.val;
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
  }
  return sum / count;
}