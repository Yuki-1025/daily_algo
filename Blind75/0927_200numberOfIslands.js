//Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
//return the number of islands.

//An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
//You may assume all four edges of the grid are all surrounded by water.

//edge cases: [[1,1,0,0,0]]; [[1], [1], [0]];

var numIslands = function(grid) {
  var count = 0;
  // create a zero matrix for recording
  var mark = [];
  for (let k = 0; k < grid.length; k ++) {
      mark.push(Array(grid[0].length).fill(0));
  }
  //console.log('mark ', mark);

  const findAdjacent = ([i, j]) => {
      if (i === 0 && j === 0) { return  [[i+1, j], [i, j+1]]; }
      if (i === grid.length - 1 && j === 0) {return [[i-1, j], [i, j+1]];}
      if (i === 0 && j === grid[0].length - 1) { return [[i+1, j], [i, j-1]]; }
      if (i === grid.length - 1 && j === grid[0].length - 1) {return [[i-1, j], [i, j-1]];}
      if (i === 0) {return [[i+1, j], [i, j-1], [i, j+1]];}
      if (i === grid.length - 1) {return [[i-1, j], [i, j-1], [i, j+1]];}
      if (j === 0) {return [[i-1, j], [i+1, j], [i, j+1]];}
      if (j === grid[0].length - 1) {return [[i-1, j], [i+1, j], [i, j-1]];}
      return [[i-1, j], [i+1, j], [i, j-1], [i, j+1]];
  }

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j ++) {
          if (grid[i][j] === '1' && !mark[i][j]) {
              //console.log('in the loop ', [i, j]);
              var island = [];
              count ++;
              island.push([i, j]);
              //console.log('ISLAND ', island);
              mark[i][j] = true;

              while (island.length > 0) {
                  var dirt = island.shift(), adjacents = findAdjacent(dirt);
                  console.log('DIRT ', dirt);
                  console.log('adjacent ', adjacents);
                  for (let n = 0; n < adjacents.length; n ++) {
                      if (grid[adjacents[n][0]][adjacents[n][1]] === '1' && !mark[adjacents[n][0]][adjacents[n][1]]) {
                          mark[adjacents[n][0]][adjacents[n][1]] = true;
                          island.push([adjacents[n][0], adjacents[n][1]]);
                      }
                  }
              }

          }
      }
  }
  return count;
};