// Find all valid combinations of k numbers that sum up to n such that the following conditions
// are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same
//combination twice, and the combinations may be returned in any order.

var combinationSum3 = function(k, n) {
  var output = [];
  const calculation = (count, sum, res, start) => {
      if (sum === n && count === 0) {
          //console.log(res);
          output.push(res.toString());
          return;
      }
      if (sum > n) return;
      if (sum < n && count > 0) {
          for (let i = start; i <= 9; i++) {
              sum += i;
              res.push(i);
              count --;
              calculation(count, sum, res, i+1);
              sum -= i;
              res.pop();
              count ++;
          }
      }

  }
  calculation(k, 0, [], 1);
  output.forEach((el, i) => {
      output[i] = el.split(',');
  })
  return output;
};