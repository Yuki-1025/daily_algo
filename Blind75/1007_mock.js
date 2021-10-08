8
3							10
1				6			9					14
// define Tree class
function TreeNode (val, left, right) {
  this.val = val || 0;
  this.left = left || null;
  this.right = right || null;
}

// binary search tree
const findTarget = (root, target) => {
	// edge case
  if (root == null) {
  	return false;
  }
  if (target === root.val) {
  	return true;
  } else if (target < root.val) {
  	// search left
     return findTarget(root.left, target);
  } else {
  	// search right
    return findTarget(root.right, target);
  }
}

1,3,6,8,9,10,14

const intoTree = (arr) => {
	// edge case
  if ( arr.length === 1) {
  	return new TreeNode(arr.[0]);
  }
	var mid = Math.floor((arr.length - 1) / 2);
  var node = new TreeNode(arr[mid]);
  node.left = intoTree(arr.slice(0, mid)); //1:1,3,6; 2:1
  node.right = intoTree(arr.slice(mid + 1)); // 9,10,14

  return node;
}


