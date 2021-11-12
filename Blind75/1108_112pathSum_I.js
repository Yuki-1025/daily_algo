// Given the root of a binary tree and an integer targetSum, return true if the tree has a
//root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true

var hasPathSum = function(root, targetSum) {
  if (root == null) return false;
  var output = false;
  var dfs = (node, sum) => {
      sum += node.val;
      if (node.left) dfs(node.left, sum);
      if (node.right) dfs(node.right, sum);
      if (!node.left && !node.right) {
          if (sum === targetSum) {
              output = true;
          }
          return; // 不写return也ok
      }
  }
  dfs(root, 0);
  return output;
};