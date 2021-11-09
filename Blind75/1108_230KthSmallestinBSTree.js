// Given the root of a binary search tree, and an integer k, return the kth smallest value
// (1-indexed) of all the values of the nodes in the tree.

Input: root = [3,1,4,null,2], k = 1
Output: 1

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3

var kthSmallest = function(root, k) {
  var res = [];
  var inorder = (node) => {
      //if (node.left) res.push(inorder(node.left));
      if (node.left) {
          if(inorder(node.left) !== undefined) { // some nodes only have right child, it will cause undefined in our array
              res.push(inorder(node.left));
          }
      }
      res.push(node.val);
      //if (node.right) res.push(inorder(node.right));
      if (node.right) {
          if(inorder(node.right) !== undefined) {
              res.push(inorder(node.right));
          }
      }
  }
  inorder(root);
  return res[k-1];
};