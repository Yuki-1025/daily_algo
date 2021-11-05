// Given the root of a binary tree, return the zigzag level order traversal of its nodes'
//values. (i.e., from left to right, then right to left for the next level and alternate
// between).

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

var zigzagLevelOrder = function(root) {
  // edge
  if (root == null) return [];
  var output = [];
  output.push([root.val]);
  var leftfirst = false;
  var q = [root], nextQ = [];

  while (q.length > 0) {
      let curr = q.shift();
      if (curr.left) {
          nextQ.push(curr.left);
      }
      if (curr.right) {
          nextQ.push(curr.right);
      }
      if (!q.length && nextQ.length) {
          let level = [], temp;
          if (leftfirst) {
              leftfirst = !leftfirst;
              for (let i = 0; i < nextQ.length; i++) {
                  level.push(nextQ[i].val);
              }
          } else {
              leftfirst = !leftfirst;
              for (let i = nextQ.length - 1; i >= 0; i--) {
                  level.push(nextQ[i].val);
              }
          }
          q = nextQ;
          nextQ = [];
          output.push(level);
      }
  }
  return output;
};