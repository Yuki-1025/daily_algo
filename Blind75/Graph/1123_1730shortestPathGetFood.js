// You are starving and you want to eat food as quickly as possible. You want to find the shortest path to arrive at any food cell.

// You are given an m x n character matrix, grid, of these different types of cells:

// '*' is your location. There is exactly one '*' cell.
// '#' is a food cell. There may be multiple food cells.
// 'O' is free space, and you can travel through these cells.
// 'X' is an obstacle, and you cannot travel through these cells.
// You can travel to any adjacent cell north, east, south, or west of your current location if there is not an obstacle.

// Return the length of the shortest path for you to reach any food cell. If there is no path for you to reach food, return -1.

// Input: grid = [["X","X","X","X","X","X"],["X","*","O","O","O","X"],["X","O","O","#","O","X"],["X","X","X","X","X","X"]]
// Output: 3
// Explanation: It takes 3 steps to reach the food.

// MORE standard BFS
var getFood = function(grid) {
  // find me
  var me = null;
  var len = grid.length, wid = grid[0].length;
  for (let r = 0; r < len; r ++) {
      for (let c = 0; c < wid; c++) {
          if (grid[r][c] === '*') {
              me = [r, c, 0];
              break;
          }
      }
      if (me) break;
  }
  // from me, start BFS
  var q = [me];
  var dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (q.length) {
      let [i, j, level] = q.shift();
      //grid[i][j] = 'X'; if mark visited when visiting, it will have many repeated cells => runtime exceeds
      for (let d of dir) {
          let newR = i + d[0];
          let newC = j + d[1];
          if (checkAdjacent(newR, newC, len, wid, grid)) {
              if (grid[newR][newC] === '#') return level + 1;
              grid[newR][newC] = 'X';
              q.push([newR, newC, level+1]);
          }
      }
  }
  return -1;
};

var checkAdjacent = (i, j, maxr, maxc, board) => {
  return i >=0 && i < maxr && j >=0 && j < maxc && board[i][j] !== 'X';
}

// Graph ========== OK===========================
var getFood = function(grid) {
  // find me
  var me = null;
  var len = grid.length, wid = grid[0].length;
  for (let r = 0; r < len; r ++) {
      for (let c = 0; c < wid; c++) {
          if (grid[r][c] === '*') {
              me = [r, c];
              break;
          }
      }
      if (me) break;
  }
  // from me, start BFS
  var q = [me], nextq = [];
    var level = 0;
    while (q.length) {
      let [i, j] = q.shift();
      // if(grid[i][j] === 'O') grid[i][j] = level;// exclude initial position
      if (i-1 >= 0) {
          if (grid[i-1][j] === '#') return level + 1;
          if (grid[i-1][j] === 'O') {
              nextq.push([i-1, j]);
              grid[i-1][j] = level+1;
          }
      }
      if (i+1 < len) {
          if (grid[i+1][j] === '#') return level + 1;
          if (grid[i+1][j] === 'O') {
              nextq.push([i+1, j]);
              grid[i+1][j] = level+1;
          }
      }
      if (j-1 >= 0) {
          if (grid[i][j-1] === '#') return level + 1;
          if (grid[i][j-1] === 'O') {
              nextq.push([i, j-1]);
              grid[i][j-1] = level+1;
          }
      }
      if (j+1 < wid) {
          if (grid[i][j+1] === '#') return level + 1;
          if (grid[i][j+1] === 'O') {
              nextq.push([i, j+1]);
              grid[i][j+1] = level+1;
          }
      }
      // check if this level is over
      if (!q.length) {
          level ++;
          q = nextq;
          nextq = [];
          // console.log(grid);
      }
    }
    return -1;
};