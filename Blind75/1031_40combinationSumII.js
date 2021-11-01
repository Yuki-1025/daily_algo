// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

var combinationSum2 = function(candidates, target) {
  var groups = new Set();
  var group = [];
  candidates.sort();

  var calculation = (sum, start) => {
      if (sum === target) {
          let solution = [...group];
          solution.sort();
          groups.add(solution.toString());
          return;
      }
      if (sum > target) return;
      for (let i = start; i < candidates.length; i++) {
              if (i > start && candidates[i] === candidates[i-1]) continue; //skip duplicated
              sum += candidates[i];
              group.push(candidates[i]);
              calculation(sum, i+1); // don't need maintain a visited matrix
              sum -= candidates[i];
              group.pop();
      }
  }
  calculation(0, 0);
  var output = [];
  groups.forEach((el) => {
      output.push(el.split(','));
  })
  return output;
};