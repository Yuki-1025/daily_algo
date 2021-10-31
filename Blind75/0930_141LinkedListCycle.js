// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by
// continuously following the next pointer. Internally, pos is used to denote the index of the node
// that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// input : a linked list
// output: true / false
// edge : [] => false
//O(n)
// runner technique 快慢指针
var hasCycle = function(head) {
  //edge case
  if (head == null) {
    return false;
  }
  var slow = head;
  var fast = head;
  while (fast.next != null && fast.next.next != null) {//只check fast即可
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
    return true;
    }
  }
  return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
