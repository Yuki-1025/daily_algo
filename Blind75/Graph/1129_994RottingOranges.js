// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

var orangesRotting = function(grid) {
  var endTime;
  var dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  // BFS starting from 2s simutaniously
  var q = [];
      // for edge
  let count1 = false;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 2) {
              q.push([i, j, 0]);
          }
          if (grid[i][j] === 1) count1 = true;
      }
  }
  if (!q.length && !count1) return 0;
  if (!q.length && count1) return -1;
  while (q.length) {
      let [r, c, time] = q.shift();
      for (let d of dir) {
          let newr = r + d[0];
          let newc = c + d[1];
          if (checkValidAdj(newr, newc, grid)) {
              grid[newr][newc] = 2
              q.push([newr, newc, time+1])
          }
      }
      if (!q.length) endTime = time;
  }
  // check if remaining 1s
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 1) return -1;
      }
  }
  return endTime;
};

var checkValidAdj = (r, c, board) => {
  return r >= 0 && c >= 0 && r < board.length && c < board[0].length && board[r][c] === 1;
}
