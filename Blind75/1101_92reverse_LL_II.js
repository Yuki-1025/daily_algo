// Given the head of a singly linked list and two integers left and right where left <= right, reverse
// the nodes of the list from position left to position right, and return the reversed list.

// UNIT TEST
// normal cases:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// special case: left = 1
// Input: head = [1,2,3,4,5], left = 1, right = 4
// Output: [1,4,3,2,5]

// special case: linked list only has one node
// Input: head = [5], left = 1, right = 1
// Output: [5]

// special case: right = tail
// Input: head = [1,2,3,4,5], left = 1, right = 5
// Output: [1,4,3,2,5]

var reverseBetween = function(head, left, right) {
  var pointer1 = head, start;
  if (left  === 1) { // if the reversed part starts from the first node
      start = pointer1;
      pointer1 = null;
  } else {
      let n = left;
      while (n > 2) {
          pointer1 = pointer1.next;
          n --;
      }
      start = pointer1.next;
  }

  if (start == null) return head; // if the input LL only have one node
  var reversePart = [start.val];
  var len = right - left;
  while (len > 0) {
      start = start.next;
      reversePart.unshift(start.val);
      len --;
  }
  // now we have reverse part values and end (start.next);

  // to recreate reverse part
  var rHead = new ListNode(reversePart[0])
  var rPointer = rHead;
  for (let i = 1; i < reversePart.length; i++) {
      rPointer.next = new ListNode(reversePart[i]);
      rPointer = rPointer.next;
  }
  rPointer.next = start.next;
  if (pointer1 != null) { pointer1.next = rHead; }
  else { return rHead; }
  return head;
};