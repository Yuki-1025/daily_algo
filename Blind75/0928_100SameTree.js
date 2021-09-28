// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the
//same value.
// O(n)

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