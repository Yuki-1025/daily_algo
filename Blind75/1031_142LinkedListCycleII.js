// Given the head of a linked list, return the node where the cycle begins. If there is no cycle,
//return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by
//continuously following the next pointer. Internally, pos is used to denote the index of the node
//that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos
//is not passed as a parameter.

// Do not modify the linked list.

// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

var detectCycle = function(head) {
  // edge case
  if (head == null) {
      return head;
  }
  //detect whether there is a cycle first
  var slow = head;
  var fast = head;
  var isCycle = false;
  while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
          isCycle = true;
          break;
      }
  }
  // find the entrance
  if (isCycle) {
      slow = head;
      let idx = 0;
      while (slow !== fast) {
          slow = slow.next;
          idx ++;
          fast = fast.next;
      }
      return slow;
  }
  return null;
};