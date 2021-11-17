// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder
// is the inorder traversal of the same tree, construct and return the binary tree.

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

var buildTree = function(preorder, inorder) {
  if (inorder.length === 1) {
      return new TreeNode(inorder[findFirst(preorder, inorder)]);
  }
  if (!inorder.length) return null;
  //var val = findFirst(preorder, inorder);
  var idx = findFirst(preorder, inorder);
  var root = new TreeNode(inorder[idx]);
  var left = inorder.slice(0, idx);
  var right = inorder.slice(idx+1);
  if (left.length) root.left = buildTree(preorder, left);
  if (right.length) root.right = buildTree(preorder, right);

  return root;
};

var findFirst = (arr1, arr2) => {
  for (let a of arr1) {
      if (arr2.indexOf(a) > -1) return arr2.indexOf(a);
  }
}