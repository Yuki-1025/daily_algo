// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the
// sequence has an edge connecting them. A node can only appear in the sequence at most once.
// Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

var maxPathSum = function(root) {
  var maxSum = -Infinity;
  var dfs = (node) => {
      if (node == null) return 0;
      var left = dfs(node.left);
      var right = dfs(node.right);
      maxSum = Math.max(maxSum, left + node.val + right);
      let oneSide = node.val + Math.max(left, right);
      if (oneSide < 0) oneSide = 0;// if the sum of a branch is less than 0,
      //we'd better give up the whole branch, bc it will only decrease our sum
      return oneSide;
  }
  dfs(root);
  return maxSum;
};