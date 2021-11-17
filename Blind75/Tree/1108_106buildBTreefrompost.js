// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal
// of the same tree, construct and return the binary tree.

Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]

var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) return null;
  var idx = findRoot(inorder, postorder);
  if (inorder.length === 1) {
      return new TreeNode(inorder[idx]);
  }
  var root = new TreeNode(inorder[idx]);
  root.left = buildTree(inorder.slice(0, idx), postorder);
  root.right = buildTree(inorder.slice(idx + 1), postorder);
  return root;
};

var findRoot = (inorder, postorder) => {
  for (let i = postorder.length - 1; i >= 0; i--) {
      let j = inorder.indexOf(postorder[i]);
      if(j > -1) return j;
  }
}

