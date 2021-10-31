// You are given two non-empty linked lists representing two non-negative integers. The digits are
// stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and
// return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function(l1, l2) {
  var head = new ListNode();
  var sum = head;
  var remaining = 0;
  while (l1 !== null && l2 !== null) {
      let add = l1.val + l2.val + remaining;
      remaining = 0;
      if (add < 10) {
          sum.val = add;
      } else {
          sum.val = add - 10;
          remaining = 1;
      }
      l1 = l1.next;
      l2 = l2.next;
      if (l1 !== null || l2 !== null || remaining) { // check before add next in case this is the last node
          sum.next = new ListNode();
          sum = sum.next;
      }
  }
  // add longer list to sum
  let longerList = l1 || l2;
  while (longerList !== null || remaining) {
      if (longerList === null) {
          sum.val = remaining;
          remaining = 0;
      } else {
          let add = longerList.val + remaining;
          remaining = 0;
          if (add < 10) {
              sum.val = add;
          } else {
              sum.val = add - 10;
              remaining = 1;
          }
          longerList = longerList.next;
          if (longerList !== null || remaining) {
              sum.next = new ListNode();
              sum = sum.next;
          }
      }
  }
  return head;
};