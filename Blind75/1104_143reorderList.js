// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.
Input: head = [1,2,3,4]
Output: [1,4,2,3]
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
// STORE each node in an array; then loop the list to create new linked list
var reorderList = function(head) {
  // edge
  if (head == null || head.next == null) return head;

  var nodelist = [];
  var node = head;
  while (node !== null) {
      nodelist.push(node);
      node = node.next;
  }
  //console.log(nodelist)
  let n = nodelist[0];
  let output = n;
  let i = 1, j = nodelist.length -1;
  while (i < j) {
      n.next = nodelist[j];
      n = n.next;
      n.next = nodelist[i];
      n = n.next;
      i++;
      j--;
  }
  if (i === j) {
      n.next = nodelist[i];
      n = n.next;
  }
  n.next = null;

  return output;
};