// MAX binary heap
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
