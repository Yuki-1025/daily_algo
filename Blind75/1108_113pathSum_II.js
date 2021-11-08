// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the
//node values in the path equals targetSum. Each path should be returned as a list of the node
// values, not node references.

// A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf
// is a node with no children.

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22

var pathSum = function(root, targetSum) {
  var output = [];
  var dfs = (node, sum, temp) => {
      if (node == null) return;
      sum += node.val;
      temp.push(node.val);
      if (node.left) dfs(node.left, sum, temp);
      if (node.right) dfs(node.right, sum, temp);
      if (!node.left && !node.right) {
          if (sum === targetSum) {
              //output.push(temp.toString())
              output.push([...temp]) // STORE A COPY
          }
      }
      temp.pop();
  }
  dfs(root, 0, []);
  // var res = [];
  // for (let o of output) res.push(o.split(','));
  return output;
};