// Given the root of a binary tree and an integer targetSum, return the number of paths where
// the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards
// (i.e., traveling only from parent nodes to child nodes).

Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.

// DFS套DFS：first traverse tree, on each node, input it as a root
var pathSum = function(root, targetSum) {
  var count = 0;
  var dfs = (node) => {
      if (!node) return;
      //visit node
      treeSum(node, 0);
      // visit left
      if(node.left) dfs(node.left);
      if(node.right) dfs(node.right);
  }
  var treeSum = (node, sum) => {
      sum += node.val;
      if (sum === targetSum) {
          count ++;
          //return; CANNOT RETURN, MAY HAVE ANOTHER SOLUTION DOWN THE ROAD/PATH
      }
      if (node.left) treeSum(node.left, sum);
      if (node.right) treeSum(node.right, sum);
  }
  dfs(root);
  return count;
}
