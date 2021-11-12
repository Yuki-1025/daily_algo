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
// use ITERATION to mutate current LL
// O(n), 扫一遍
var reverseList = function(head) {
  // => reverse all arrows
  var last = null;
  while (head !== null) {
      let nextOne = head.next; // store head.next
      head.next = last; // change head.next to last (reverse direction)
      last = head; //move last to head's position
      head = nextOne; // move head to next position
  }
  return last;
}

// RECURSION
var reverseList = function(head) {
  if (head && head.next) {
    // divide LL into Head and the rest, and switch their positions
    let rest = reverseList(head.next);
    // move head to the rest.next
    head.next.next = head;
    // remove the previous relation: head.next
    head.next = null;
    // return rest, bc rest is the new LL head
    return rest;
  } else {
    // base case
    return head;
  }
}

// CREATE A NEW LL (not inplace)
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