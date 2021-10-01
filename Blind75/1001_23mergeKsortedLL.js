// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

//using merge 2 linked list as a helper function

//O nlogn
//recursion

var mergeKLists = function(lists) {
  // handle edge case
  if (lists.length === 0) { return null; }
  if (lists.length === 1) { return lists[0]; }

  // base case
  // if (lists.length === 2) {
  //     return mergeTwoLists(lists[0], lists[1]);
  // }
  var mid = Math.floor((lists.length - 1) / 2);
  // left
  //mergeKLists(lists.slice(0, mid + 1));
  //right
  //mergeKLists(lists.slice(mid + 1));
  return mergeTwoLists(mergeKLists(lists.slice(0, mid + 1)), mergeKLists(lists.slice(mid + 1)));


};

const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) {
      if (!l1 && !l2) {
          return l1;
      }
      return l1 || l2;
  }

  var current1 = l1;
  var current2 = l2;
  var merged = new ListNode(), curr = merged;
  while (current1 && current2) {
      if (current1.val <= current2.val) {
          curr.val = current1.val;
          current1 = current1.next;
      } else {
          curr.val = current2.val;
          current2 = current2.next;
      }
      curr.next = new ListNode();
      curr = curr.next;
  }
  // handle remaining
  let remaining = current1 || current2;
  curr.val = remaining.val;
  curr.next = remaining.next;

  return merged;
}