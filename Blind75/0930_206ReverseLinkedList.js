// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// input: linked list
// output: linked list (in reversed order)
// edge case: null => null; [1] => [1];
// complexity: O n

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  // declare an array to store values
  var arr = [];
  // iterate through linked list
  var current = head;
  while(current.next != null) {
    arr.push(current.val);
    current = current.next;
  }
  arr.push(current.val);
  // create a new linked list
  // iterate through arr in reversed order
  var newHead = new ListNode(arr[arr.length - 1]); // create a new LL
  var newCurrent = newHead;// the new LL needs a new pointer
  for (let i = arr.length - 2; i >= 0; i --) {
    newCurrent.next = new ListNode(arr[i]);
    newCurrent = newCurrent.next;
  }
  return newHead;
};