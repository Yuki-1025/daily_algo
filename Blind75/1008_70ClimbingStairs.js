// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// STILL a fibonacci problem
var climbStairs = function(n) {
  var memos = {};
  const inner = (stairs) => {
      if (stairs === 1) {
          return 1;
      }
      if (stairs === 2) {
          return 2;
      }
      if (!memos[stairs]) {
          memos[stairs] = inner(stairs - 1) + inner(stairs - 2);
      }
      return memos[stairs];
  }
  return inner(n);
};

// MY First intuition is BACKTRACKING
// WHY NOT backtracking; CANNOT handle n = 100;
var climbStairs = function(n) {
    var options = new Set();
    var option = [], sum = 0;
    var steps = [1, 2];
    const climb = (n) => {
        if (sum === n) {
            options.add(option.toString());
            return;
        }
        if (sum > n) { return; }
        for (let i = 0; i < 2; i ++) {
            option.push(steps[i]);
            sum += steps[i];
            climb(n);
            sum -= steps[i];
            option.pop();

        }
    }
    climb(n);
    return options.size;
};