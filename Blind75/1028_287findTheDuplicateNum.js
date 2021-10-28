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
var findDuplicate = function(nums) {
  /*Cycle-Detection*/
  let slow=nums[0];
  let fast=nums[nums[0]];
  while(slow!=fast){
      slow=nums[slow];//1 step
      fast=nums[nums[fast]];//2 step
  }
  /*Cycle Length Calculation*/
  slow=nums[slow];
  let len=1;
  while(slow!=fast){
      slow=nums[slow];
      len++;
  }
  /*move fast len steps forward from start*/
  fast=nums[0];
  while(len--){
      fast=nums[fast];
  }
  /*Move slow and fast 1 step at time */
  slow=nums[0];
  while(slow!=fast){
      slow=nums[slow];
      fast=nums[fast];
  }
  return slow;
};

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