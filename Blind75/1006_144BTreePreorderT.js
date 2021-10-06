// Given the root of a binary tree, return the preorder traversal of its nodes' values.

var preorderTraversal = function(root) {
  var result = [];

  const preOrder = (node) => {
      if (node == null) {
          return [];
      }
      result.push(node.val);
      preOrder(node.left);
      preOrder(node.right);
      return result;
  }
  return preOrder(root);
};