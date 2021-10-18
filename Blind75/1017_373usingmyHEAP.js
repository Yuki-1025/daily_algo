// You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

// Define a pair (u, v) which consists of one element from the first array and one element from the second array.

// Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

// Example 1:

// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]]
// Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
// Example 2:

// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// Output: [[1,1],[1,1]]
// Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

var kSmallestPairs = function(nums1, nums2, k) {
  var hp = new MaxHeap();
  for (let i = 0; i < nums1.length; i ++) {
      for (let j = 0; j < nums2.length; j ++) {
          if (hp.size < k) {
              hp.add(nums1[i] + nums2[j]);
          } else {
              if (nums1[i] + nums2[j] < hp.storage[0]) {
                  hp.removeMax();
                  hp.add(nums1[i] + nums2[j])
              }
          }
      }
  }

  console.log(hp.storage);
};

const MaxHeap = function() {
this.storage = [];
this.size = 0;
}

MaxHeap.prototype.add = function(el) {
this.storage.push(el);
let idx = this.storage.length - 1;
let parent = Math.floor((idx - 1)/2);
while (parent >= 0 && this.storage[idx] > this.storage[parent]) {
  this.storage[idx] = this.storage[parent];
  this.storage[parent] = el;
  idx = parent;
  parent = Math.floor((idx - 1)/2);
}
this.size ++;
}

MaxHeap.prototype.removeMax = function () {
var max = this.storage[0];
this.storage[0] = this.storage.pop();
this.size --;
var len = this.storage.length;
var curr = 0;
while (true) {
  var left = curr * 2 + 1, right = curr * 2 + 2;
  let swap = null;
  if (left < len) {
    if (this.storage[left] > this.storage[curr]) {
      swap = left;
    }
  }
  if (right < len) {
    if ((this.storage[right] > this.storage[curr] && swap == null) || (swap !== null && this.storage[right] > this.storage[left])) {
      swap = right;
    }
  }
  if (swap === null) { break; }
  let temp = this.storage[curr];
  this.storage[curr] = this.storage[swap];
  this.storage[swap] = temp;
  curr = swap;
}

return max;
}
