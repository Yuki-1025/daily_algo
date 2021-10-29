// Given a collection of numbers, nums, that might contain duplicates, return all possible unique
//permutations in any order.
// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// use Set to store combinations
var permuteUnique = function(nums) {
  var group = [];
  var groups = new Set();
  var isVisited = Array(nums.length).fill(false);

  const pickOne = (n) => {
      if (n === nums.length) {
          groups.add(group.toString());
          return;
      }
      if (n < nums.length) {
          for (let i = 0; i < nums.length; i++) {
              if (!isVisited[i]) {
                  group.push(nums[i]);
                  n++;
                  isVisited[i] = true;
                  pickOne(n);
                  n--;
                  group.pop();
                  isVisited[i] = false;
              }

          }
      }
  }
  pickOne(0);
  var output = [];
  groups.forEach((group) => {
      output.push(group.split(','));
  })
  return output;
};