 // in-order traversal: 5, 2, 6, 1, 7, 3,8
 // pre-order traversal: 1, 2, 5, 6, 3, 7, 8
 // post-order traversal: 5, 6, 2, 7, 8, 3, 1
 // level-order traversal: 1,2,3,5,6,7,8

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function inOrder (root) {
  // base case
 if (root == null) { return; }
 // recursive case
 inOrder(root.left);
 console.log(root.val);
 inOrder(root.right);
}

function preOrder (root) {
  // base case
 if (root == null) { return; }
 // recursive case
 console.log(root.val);
 preOrder(root.left);
 preOrder(root.right);
}

function postOrder (root) {
  //base case
 if (root == null) { return; }
 // recursive
 postOrder(root.left);
 postOrder(root.right);
 console.log(root.val);
}

function levelOrder (root) {
  // edge case
    if (root == null) { return; }

   var queue = [];
   queue.push(root);

   while (queue.length > 0 ) {
     var current = queue.shift();
     console.log(current.val);
     if (current.left) {
       queue.push(current.left);
     }
     if (current.right) {
       queue.push(current.right)
     }
   }
  }