// Given the head of a linked list, remove the nth node from the end of the list and return
// its head.

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

var removeNthFromEnd = function(head, n) {
  if (!head) { return head;}

  var checkPos = (node, n) => {
      let i = n;
      while (i > 1) {
          if (node && node.next) {
              node = node.next;
              i --;
          } else {
              return false;
          }

      }
      if (node && !node.next) {
          return true;
      }
      return false;
  }

  //check head first
  if (checkPos(head, n)) {
      return head.next;
  }
  var current = head;
  while (current.next) {
      //first check if the current node is the one we want to delete
      if (checkPos(current.next, n)) {
          // process DELETE
          current.next = current.next.next;
          return head;
      } else {
          current = current.next;
      }
  }
};