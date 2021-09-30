//Merge two sorted linked lists and return it as a sorted list. The list should be made by
//splicing together the nodes of the first two lists.
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// input : two sorted linked lists
// output: one sorted linked list
// edge cases: two nulls => return null; one of them is null => return only the other list

var mergeTwoLists = function(l1, l2) {
  // handle edge cases
  if (!l1 || !l2) {
      if (!l1 && !l2) {
          return l1;
      }
      return l1 || l2;
  }

  var current1 = l1, current2 = l2;
  var merged = new ListNode();
  var current = merged;
  while (current1 != null && current2 != null) {
      if (current1.val <= current2.val) {
          current.val = current1.val;
          current1 = current1.next;
      } else {
          current.val = current2.val;
          current2 = current2.next;
      }
      current.next = new ListNode();
      current = current.next;
  }
  // add remaining
  // console.log('current1 ', current1);
  // console.log('current2 ', current2);
  // console.log('current ', current);
  var temp = current1 || current2;
  // console.log('temp ', temp);
  current.val = temp.val;
  current.next = temp.next;

  return merged;
};