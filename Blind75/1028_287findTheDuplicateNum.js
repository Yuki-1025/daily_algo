// Given an array of integers nums containing n + 1 integers where each integer is in the
// range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant
//extra space.

// Input: nums = [1,3,4,2,2]
// Output: 2
// Input: nums = [3,1,3,4,2]
// Output: 3

//brutal force O(n^2)
var findDuplicate = function(nums) {
  for (let i = 0; i < nums.length - 1; i ++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] === nums[j]) {
              return nums[i];
          }
      }
  }
};

// best solution: slow and fast pointer
const findDuplicate = nums => {
  let slow = nums[0]
  let fast = nums[0]
  // Find the intersection point of the two runners.
  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (slow !== fast)
  // Find the "entrance" to the cycle.
  slow = nums[0]
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return fast;
}

// CANNOT handle duplicate appear more than twice==========
var findDuplicate = function(nums) {
  var n = nums.length - 1;
  var sumN = 0;
  for (let i = 1; i <= n; i++) {
      sumN += i;
  }

  var sum = 0;
  for (let i = 0; i < n+1; i++) {
      sum += nums[i];
  }
  return sum - sumN;
};

// WRONG: exceed time
var findDuplicate = function(nums) {
  var slow = 0, fast = 0;
  do {
      slow ++;
      fast += 2;
      slow = correctP(slow, nums.length - 1);
      fast = correctP(fast, nums.length - 1);
      while (slow === fast) {
          slow ++;
          fast += 2;
          slow = correctP(slow, nums.length - 1);
          fast = correctP(fast, nums.length - 1);
      }

  } while (nums[slow] !== nums[fast])
  return nums[slow];
};

var correctP = (pointer, n) => {
  if (pointer <= n) {
      return pointer;
  } else {
      return pointer % n - 1
  }
}