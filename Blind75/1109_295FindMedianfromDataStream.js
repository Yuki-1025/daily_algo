// The median is the middle value in an ordered integer list. If the size of the list is even,
// there is no middle value and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the
// actual answer will be accepted.

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0

// METHOD I: each time add new num, use binary search to insert into the increasing order
var MedianFinder = function() {
  this.storage = [];
  this.count = 0;
};

MedianFinder.prototype.addNum = function(num) {
  if (!this.count) {
      this.storage.push(num);
  } else if (num <= this.storage[0]) {
      this.storage.unshift(num);
  } else if (num >= this.storage[this.count-1]) {
      this.storage.push(num);
  } else {
      let start = 0, end = this.count - 1;
      while (start < end) {
          let mid = Math.floor((start + end)/2);
          if (this.storage[mid] >= num && this.storage[mid-1] <= num) {
              this.storage.splice(mid, 0, num);
              break;
          } else if (num >= this.storage[mid] && num <= this.storage[mid + 1]) {
              this.storage.splice(mid+1, 0, num);
              break;
          } else if (num > this.storage[mid]) {
              start = mid + 1;
          } else {
              end = mid-1;
          }
      }
  }

  this.count ++;
};

MedianFinder.prototype.findMedian = function() {
  if (this.count % 2 !== 0) {
      return this.storage[Math.floor(this.count / 2)];
  } else {
      return (this.storage[this.count / 2] + this.storage[this.count / 2 -1]) / 2;
  }
};
