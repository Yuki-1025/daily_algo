// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined
//between two nodes p and q as the lowest node in T that has both p and q as descendants
//(where we allow a node to be a descendant of itself).”

//traverse first 在每个节点上判断pq是否在同一tree中，store所有ancestor，
//return最后一个ancestor, 因为DFS
var lowestCommonAncestor = function(root, p, q) {
  var ancestor = [];
  var dfs = (node) => {
      if (inSameTree(node, p, q)) {
          ancestor.push(node);
      } else {
          return;
      }
      if (node.left) dfs(node.left);
      if (node.right) dfs(node.right);
  }
  dfs(root);
  return ancestor[ancestor.length - 1];
};

var inSameTree = (node, p, q) => {
  var queue = [node];
  var pIn = false, qIn = false;
  while (queue.length) {
      let curr = queue.shift();
      if (curr === p) pIn = true;
      if (curr === q) qIn = true;
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
  }
  //console.log(pIn && qIn);
  return pIn && qIn;
}