//Given an array nums of distinct integers, return all the possible permutations.
//You can return the answer in any order.

// input : array of unique integers
// output: array of arrays with all orders
// edge cases: [] ; [1] => [[1]]

// O (n^n)
var permute = function(nums) {
  var results = [];
  var result = [];
  var len = nums.length;
  var memo = Array(len).fill(0);

  const helper = (arr) => {
      //base case
      if (result.length === len) {
          results.push(result.toString());
          return;
      }
      // recursive case
      for (let i = 0; i < arr.length; i ++) {
          if (memo[i] !== 1) {
              result.push(arr[i]);
              memo[i] = 1;
              helper(arr);
              result.pop();
              memo[i] = 0;
          }
      }
  }
  helper(nums);
  for (let j = 0; j < results.length; j ++) {
      results[j] = results[j].split(',');
  }
  return results;
};

