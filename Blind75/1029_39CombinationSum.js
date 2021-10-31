// Given an array of distinct integers candidates and a target integer target, return a list of all
//unique combinations of candidates where the chosen numbers sum to target. You may return the
//combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are
//unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150
//combinations for the given input.

var combinationSum = function(candidates, target) {
  var cbs = new Set();
  var cb = [];
  var sum = 0;
  const calculation = () => {
      // console.log(cb);
      if (sum === target) {
          var sorted_cb = cb.slice(); // make a copy of cb
          sorted_cb.sort();
          cbs.add(sorted_cb.toString());
          return;
      }
      if (sum > target) { return; }
      for (let c = 0; c < candidates.length; c++) {
          sum += candidates[c];
          cb.push(candidates[c]);
          calculation();
          sum -= candidates[c];
          cb.pop();
      }
  }

  calculation();
  var output = [];
  cbs.forEach((s) => {
      output.push(s.split(','));
  })
  return output;
};

//???????? why startIndex? to avoid duplicates
var combinationSum = function(candidates, target) {
  let result = [];

  function dfs(current, startIndex, currentSum){
      if(currentSum == target) {
          result.push(current);
          return;
      }
      if(currentSum > target) {
          return;
      }
      for (let i = startIndex; i < candidates.length; i++) {
          dfs(current.concat(candidates[i]), i, currentSum + candidates[i]);
      }
  }

  dfs([],0, 0);
  return result;
};