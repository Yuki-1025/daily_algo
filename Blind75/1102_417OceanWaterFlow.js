// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean.
// The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches
//the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix
// heights where heights[r][c] represents the height above sea level of the cell at coordinate
// (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly
// north, south, east, and west if the neighboring cell's height is less than or equal to the
// current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain
// water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

// USE DFS is more suitable for this problem: starting from the boundary cells
var pacificAtlantic = function(heights) {
    var output = [];
    var lenR = heights.length, lenC = heights[0].length;
    var pacific = Array(lenR).fill(0).map((row) => Array(lenC).fill(0));
    var atlantic = Array(lenR).fill(0).map((row) => Array(lenC).fill(0));
    // only loop through the boundaries
    for (let row = 0; row < lenR; row ++) {
        dfs(row, 0, pacific, heights);
        dfs(row, lenC-1, atlantic, heights);
    }
    for (let col = 0; col < lenC; col ++) {
        dfs(0, col, pacific, heights);
        dfs(lenR-1, col, atlantic, heights);
    }
    for (let row = 0; row < lenR; row ++) {
        for (let col = 0; col < lenC; col ++) {
            if (pacific[row][col] && atlantic[row][col]) output.push([row, col]);
        }
    }
    return output;
};

var dfs = (i, j, visited, board) => {
    visited[i][j] = 1;
    let children = flowTo([i, j], board);
    for (let c of children) {
        if (!visited[c[0]][c[1]]) {
            dfs(c[0], c[1], visited, board);
        }
    }
}

var flowTo = ([i, j], board) => {
    let output = [];
    let lenV = board.length, lenH = board[0].length;
    let curr = board[i][j];
    if (i-1 >= 0 && board[i-1][j] >= curr) output.push([i-1, j]);
    if (i+1 < lenV && board[i+1][j] >= curr) output.push([i+1, j]);
    if (j-1 >= 0 && board[i][j-1] >= curr) output.push([i, j-1]);
    if (j+1 < lenH && board[i][j+1] >= curr) output.push([i, j+1]);
    return output;
}

// BASIC solution: from every cell, grow a graph then BFS
var pacificAtlantic = function(heights) {
  var output = [];
  var lenR = heights.length, lenC = heights[0].length;
  for (let row = 0; row < lenR; row ++) {
      for (let col = 0; col < lenC; col ++) {
          let start = [row, col];
          let visited = Array(lenR).fill(0).map((r) => Array(lenC).fill(0));
          visited[row][col] = 1;
          let q = [start];
          let route = [];
          while (q.length) {
              let curr = q.shift();
              route.push(curr);
              let neighbors = flowTo(curr, heights);
              for (let n of neighbors) {
                  if (!visited[n[0]][n[1]]) {
                      visited[n[0]][n[1]] = 1;
                      q.push(n)
                  }
              }
          }
          if(checkRoute(route, lenR, lenC)) {
              output.push(start);
          }
      }
  }
  return output;
};

var flowTo = ([i, j], board) => {
  let output = [];
  let lenV = board.length, lenH = board[0].length;
  let curr = board[i][j];
  if (i-1 >= 0 && board[i-1][j] <= curr) output.push([i-1, j]);
  if (i+1 < lenV && board[i+1][j] <= curr) output.push([i+1, j]);
  if (j-1 >= 0 && board[i][j-1] <= curr) output.push([i, j-1]);
  if (j+1 < lenH && board[i][j+1] <= curr) output.push([i, j+1]);
  return output;
}

var checkRoute = (arr, len1, len2) => {
  let pacific = false;
  let atlantic = false;
  for (let loc of arr) {
      if (loc[0] === 0 || loc[1] === 0) pacific = true;
      if (loc[0] === len1-1 || loc[1] === len2-1) atlantic = true;
  }
  return pacific && atlantic;
}


