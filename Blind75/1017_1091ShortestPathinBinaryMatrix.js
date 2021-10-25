// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.

var shortestPathBinaryMatrix = function(grid) {
  var len = grid.length;
  //edge case
  if (grid[0][0] || grid[len - 1][len - 1]) {
      return -1;
  }
  if (len === 1) return 1;

  var memo = grid.map((row) => {
      return Array(row.length).fill(false);
  })
  //console.log(memo);
  var q = [], nextQ = [];
  var count = 1;
  q.push([0, 0]);
  memo[0][0] = true;

  while (q.length > 0) {
      let curr = q.shift();
      let adjacents = findAdjacent(curr);
      for (let adj of adjacents) {
          //console.log(adj);
          if(grid[adj[0]] && grid[adj[1]] && !grid[adj[0]][adj[1]] &&!memo[adj[0]][adj[1]]) {
              memo[adj[0]][adj[1]] = true;
              nextQ.push(adj)
          }
      }
      if (q.length < 1) {
          count ++;
          q = [...nextQ];
          nextQ = [];
          if (memo[len-1][len-1]) {
              return count;
          }
      }
      // console.log(memo);
      // console.log(count);

  }
  return -1;
};

var findAdjacent = ([row, col]) => {
  return [[row-1, col], [row-1, col+1], [row, col+1], [row+1, col+1], [row+1, col], [row+1, col-1], [row, col-1], [row-1, col-1]];
}


// try another way but exceed time limit
var shortestPathBinaryMatrix = function(grid) {
    var len = grid.length;
    // edge cases
    if (len === 1) { return 1; }
    if (grid[0][0] || grid[len - 1][len - 1]) {
        return -1;
     }
    // traverse the graph using BFS
    var counter = 1;
    grid[0][0] = counter;
    var q = [[0, 0]];
    var nextQ = [];
    while (q.length > 0) {
        let curr = q.shift();
        grid[curr[0]][curr[1]] = counter;
        let adjacents = findAdjacent(curr);
        for (let adj of adjacents) {
            if (grid[adj[0]] && grid[adj[1]] && !grid[adj[0]][adj[1]]) {
                nextQ.push(adj);
            }
        }
        if (q.length === 0) {
            if (grid[len - 1][len - 1]) { return counter;}
            counter ++;
            q = [...nextQ];
            nextQ = [];
        }
    }
    // if no path found
    return -1;
}