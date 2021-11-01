// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Input: nums = [2,1,1,2]
// Output: 4

// DYNAMIC PROGRAMING
// DO NOT NEED STORE ALL INTERMEDIATE RESULTS
var rob = function(nums) {
  var previous = 0;
  var beforePrevious = 0;

  for (let num of nums) {
      let temp = previous;
      previous = Math.max(beforePrevious + num, previous);
      //console.log(previous)
      beforePrevious = temp;
  }
  return previous;
};
