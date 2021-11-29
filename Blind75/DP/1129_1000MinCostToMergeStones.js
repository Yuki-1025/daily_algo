// There are n piles of stones arranged in a row. The ith pile has stones[i] stones.

// A move consists of merging exactly k consecutive piles into one pile, and the cost of this move is
// equal to the total number of stones in these k piles.

// Return the minimum cost to merge all piles of stones into one pile. If it is impossible,
//return -1.

// Input: stones = [3,2,4,1], k = 2
// Output: 20
// Explanation: We start with [3, 2, 4, 1].
// We merge [3, 2] for a cost of 5, and we are left with [5, 4, 1].
// We merge [4, 1] for a cost of 5, and we are left with [5, 5].
// We merge [5, 5] for a cost of 10, and we are left with [10].
// The total cost was 20, and this is the minimum possible.

// DP: O(n^3*k)
// dp[i][j][k]: merge stones[i] to stones[j] to k piles
// initial status: if i = j & k =1, dp[i][j][1] = 0; else inf
// ans: dp[0][len-1][1]
// transition:
// dp[start][end][k] = dp[start][mid][1] + dp[mid+1][end][k-1]
// dp[start][end][1] = dp[start][end][k] + sumStones(i~j)
var mergeStones = function(stones, k) {
  // edge
  var len = stones.length;
  if ((len - 1) % (k - 1) > 0) return -1;
  // prefix sum
  var prefix = Array(len+1).fill(0);
  for (let i = 0; i < len; i++) {
      prefix[i+1] = prefix[i] + stones[i];
  }
  // dp
  var dp = Array(len).fill(0).map((row) => Array(len).fill(0).map((r) => Array(k+1).fill(Infinity)));
  for (let i = 0; i < len; i++) {
      dp[i][i][1] = 0;
  }
  for (let l = 2; l <= len; l++) {// sub-prob length
      for (let start = 0; start <= len - l; start ++) {
          let end = start + l - 1;
          for (let n = 2; n <= k; n++) {
              for (let mid = start; mid < end; mid += k-1) {
                  dp[start][end][n] = Math.min(dp[start][end][n], dp[start][mid][1] + dp[mid+1][end][n-1]);
              }
          }
          dp[start][end][1] = dp[start][end][k] + prefix[end+1] - prefix[start];
      }
  }
  return dp[0][len-1][1];
};