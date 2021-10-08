// to generate a fibonacci number on position i

// time complexity: O(2^n);
function fibonacci(i) {
  // base
  if (i === 0) { return 0; }
  if (i === 1) { return 1; }
  return fibonacci(i - 1) + fibonacci(i - 2);
}

//====Improve time complexity to O(n)========================
// MEMOIZATION/top-down dynamic programming
function fibonacci(i) {
  var memos = {};

  var inner = (i) => {
    // base
    if (i === 0) {
      console.log('here 0');
      return 0;
    }
    if (i === 1) {
      console.log('here 1');
      return 1;
    }
    if (!memos[i]) {
      memos[i] = inner(i - 1) + inner(i - 2);
    } else {console.log('use directly!')}
    return memos[i];
  }
  return inner(i);
}

//====bottom up dynamic programming ====
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  var memos = [0, 1];
  for (let i = 2; i <= n; i ++) {
    memos.push(memos[i - 1] + memos[i - 2]);
  }

  return memos[n];
}
// ==== to reduce space complexity====
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  var a = 0, b = 1, c;
  for (let i = 2; i <= n; i ++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}