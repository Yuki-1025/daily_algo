// Given two integers n and k, return all possible combinations of k numbers out of the range
//[1, n].
// You may return the answer in any order.

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
// Input: n = 1, k = 1
// Output: [[1]]

var combine = function(n, k) {
  // create the range [1, n]
  var range = [];
  for (let i = 1; i <= n; i++) {
      range.push(i);
  }
  var group = [];
  var groups = [];
  // cannot have duplicates [NO NEED: WILL JUST SLICE VISITED OUT]
  //var visited = Array(n).fill(false);

  const groupCreator = (i, arr) => {
      if (i === k) {
          groups.push(group.toString());
          return;
      }
      if (i < k) {
          for (let j = 0; j < arr.length; j++ ) {
              group.push(arr[j]);
              i++;
              groupCreator(i, arr.slice(j+1));
              i --;
              group.pop();
          }
      }
  }
  groupCreator(0, range);
  groups.forEach((g, idx) => {
      groups[idx] = g.split(',');
  })
  return groups;
};