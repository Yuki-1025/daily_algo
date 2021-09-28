// Given the root of a binary tree, invert the tree, and return its root.

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// input : tree
// output: inverted tree

//complexity: recursively visit each node once => O(n)
var invertTree = function(root) {
  if(root == null) { return root; }
  var newTree = new TreeNode(root.val);

  if (root.left) {
      newTree.right = invertTree(root.left);
  }
  if (root.right) {
      newTree.left = invertTree(root.right);
  }
  return newTree;
};