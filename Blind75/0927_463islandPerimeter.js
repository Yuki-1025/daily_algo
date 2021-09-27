// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// complexity O(m*n)
var islandPerimeter = function(grid) {
  var perimeter = 0;

  // for each ele, check the number of adjacent 1s
const checkAdjacent = (i, j) => {
    let adjpoints = [];
    if (i - 1 >= 0) { adjpoints.push([i - 1, j]); }
    if (i + 1 < grid.length) { adjpoints.push([i + 1, j]); }
    if (j - 1 >= 0) { adjpoints.push([i, j - 1]); }
    if (j + 1 < grid[0].length) { adjpoints.push([i, j + 1]); }
    var count = 0;
    // loop over grid[i][j]'s adjacent points, find 1s
    for (let k = 0; k < adjpoints.length; k ++ ) {
        if (grid[adjpoints[k][0]][adjpoints[k][1]] === 1) {
            count ++;
        }
    }
    return count;
}
  // 2 nested for loops to iterate all ele in the matrix
for (let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < grid[0].length; j ++) {
        if (grid[i][j] === 1) {
            //increase perimeter according to the number of ajacents
            perimeter += 4 - checkAdjacent(i, j);
        }
    }
}
  //return perimeter
  return perimeter;

};