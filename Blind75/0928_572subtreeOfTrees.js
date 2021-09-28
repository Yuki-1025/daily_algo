// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with
//the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's
//descendants. The tree tree could also be considered as a subtree of itself.

// USE Q100 Func as helper

var isSubtree = function(root, subRoot) {
  if (root == null && subRoot == null) {
      return true;
  }
  if (root == null && subRoot) {
      return false;
  }
  if (subRoot == null && root) {
      return true;
  }

  var queue = [root];

  while (queue.length > 0) {
      var current = queue.shift();
      if (current.val === subRoot.val) {
          //invoke inner func(check the same tree)
          if (isSameTree(current, subRoot)) {
              return true;
          };
      }
      if (current.left) {
          queue.push(current.left);
      }
      if (current.right) {
          queue.push(current.right);
      }
  }
  return false;
};

var isSameTree = function(p, q) {
//edge case
if (p == null && q == null) {
    return true;
}
if (p == null) {
    return false;
}
if (q == null) {
    return false;
}
var queue1 = [], queue2 = [];
queue1.push(p);
queue2.push(q);

while (queue1.length > 0 || queue2.length > 0) {
    var r1 = queue1.shift();
    var r2 = queue2.shift();
    if (r1.val !== r2.val) {
        return false;
    }
    if (r1.left && r2.left) {
        queue1.push(r1.left);
        queue2.push(r2.left);
    } else if (!r1.left && !r2.left){

    } else {
        return false;
    }
    if (r1.right && r2.right) {
        queue1.push(r1.right);
        queue2.push(r2.right);
    } else if (!r1.right && !r2.right) {

    } else {
        return false;
    }

}
return true;
};