// Given an integer array nums that may contain duplicates, return all possible subsets
//(the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Input: nums = [0]
// Output: [[],[0]]

// NOTE: two types of dup=> [2,2] & [2,2]; [2,1] & [1,2], thus SORT!!

var subsetsWithDup = function(nums) {
  var groups = new Set;
  var group = [];
  var selection = [0, 1];

  const helper = (n) => {
      if (n === nums.length) {
          let converted = [];
          group.forEach((el, i) => {
              if (el) {
                  converted.push(nums[i]);
              }
          })
          converted.sort();
          groups.add(converted.toString());
          return;
      }
      if (n < nums.length) {
          for (let s of selection) {
              group.push(s);
              n++;
              helper(n);
              n --;
              group.pop();
          }
      }
  }
  helper(0);
  var output = [];
  groups.forEach((el) => {
      if (!el.length) {
          output.push([]);
      } else {
        output.push(el.split(','));
      }
  })
  //console.log(groups);
  return output;
};