// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.

// input : integer array, integer k
// output: array of k most frequent integers
// edge case: [1,2,1,2,5], 1 => return the first most frequent one

// we can USE HEAP to reduce complexity to O(n*log k)
// use Python for HEAP

// O(n * log n)
var topKFrequent = function(nums, k) {
  // loop through nums, store count in obj
  var count = {};
  for (let i = 0; i < nums.length; i ++) {
      if (count[nums[i]] === undefined) {
          count[nums[i]] = 1
      } else {
          count[nums[i]] ++;
      }
  }
  // loop through count, get a sorted array based on count
  var arr = Object.entries(count);

  arr = arr.sort((a, b) => {
      return b[1] - a[1];
  })
  var result = [];
  var topK = arr.slice(0, k);
  topK.forEach((el) => {
      result.push(Number.parseInt(el[0]));
  })

  return result;
};

//complexity O (n^k)===================================================================
var topKFrequent = function(nums, k) {
  // loop through nums, store count in obj
  var count = {};
  for (let i = 0; i < nums.length; i ++) {
      if (count[nums[i]] === undefined) {
          count[nums[i]] = 1
      } else {
          count[nums[i]] ++;
      }
  }
  // loop through count, get a sorted array based on count
  var arr = Object.entries(count);
  var result = [];
  while (k > 0) {
      var max = arr[0][1], idx = 0;
      for (let j = 1; j < arr.length; j ++) {
          if (arr[j][1] > max) {
              max = arr[j][1];
              idx = j;
          }
      }
      result.push(arr[idx][0]);
      arr.splice(idx, 1);
      k --;
  }
  return result;
};
