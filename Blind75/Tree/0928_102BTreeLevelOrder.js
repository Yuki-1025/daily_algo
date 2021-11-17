// Given the root of a binary tree, return the level order traversal of its nodes' values.
//(i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// input : Tree
// output: array of arrays
var levelOrder = function(root) {
  // handle edge case
  if (root == null) {
      return [];
  }
  //bfs
  var queue = [], nextQ = [];
  var result = [], temp = [];
  queue.push(root);

  while (queue.length > 0) {
      var current = queue.shift();
      temp.push(current.val);
      if (current.left) {
          nextQ.push(current.left)
      }
      if (current.right) {
          nextQ.push(current.right)
      }
      if (queue.length < 1) {
          result.push(temp);
          queue = [...nextQ];
          nextQ = [];
          temp = [];
      }
  }
 return result;
};

//=============================================
var levelOrder = function(root) {
  // handle edge case
  if (root == null) {
      return [];
  }
  //bfs
  var queue = [], result = [];
  queue.push([0, root]);

  while (queue.length > 0) {
      var current = queue.shift();
      result.push(current);
      if (current[1].left) {
          queue.push([current[0] + 1, current[1].left])
      }
      if (current[1].right) {
          queue.push([current[0] + 1, current[1].right])
      }
  }
  let n = 0, outputs = {};
  for (let i = 0; i < result.length; i ++) {
      if (outputs[i] === undefined) {
          outputs[i] === [result[i][1].val];
      } else {
          outputs[i].push(result[i][1].val);
      }
  }
  let final = [];
  for (let key in outputs) {
      final.push(outputs[key]);
  }
  return final;
};