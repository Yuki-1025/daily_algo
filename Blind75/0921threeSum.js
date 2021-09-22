// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// input: array of integers
// output: array of arrays (triplets)
// edge cases: [] => []; length < 3; cannot get 0 out of it

// O(n^3) n(n-1)(n-2)
var threeSum = function(nums) {
  //edge cases:
  if (nums.length < 3) {
    return [];
  }
  // sort in advance
  nums.sort((a, b) => {
    return a - b;
  })

  var results = new Set();
  // find triplets with duplicates
  for (let i = 0; i < nums.length - 2; i ++ ) {
    for (let j = i + 1; j < nums.length - 1; j ++) {
      for (let k = j + 1; k < nums.length; k ++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          results.add([[nums[i], nums[j], nums[k]]].toString());
        }
      }
    }
  }
  // transform set into array
  var arr = [];
  for (let r of results) {
    arr.push(r.split(','));
  }

  return arr;
};

// to reduce complexity O(n^2)====================================
var threeSum = function(nums) {
  //edge cases:
  if (nums.length < 3) {
    return [];
  }
  // sort in advance
  nums.sort((a, b) => {
    return a - b;
  })

  //var negative = [], positive = [];
  var results = new Set();
  for (let i = 0; i < nums.length - 2; i ++) {
    let j = i + 1, k = nums.length - 1;
    //if (i !== 0 && nums[i] === nums[i-1]){ continue; }
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        results.add([[nums[i], nums[j], nums[k]]].toString());
        //k --;
        j ++;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k --;
      } else {
        j ++;
      }
    }
  }
  var arr = [];
  for (let r of results) {
    arr.push(r.split(','));
  }
  return arr;
};