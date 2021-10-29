// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are
//horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

//O (mnk);
var exist = function(board, word) {
  // create a matrix for recording [visited or not]
  var visit = [];
  var result = false;
  for (let k = 0; k < board.length; k ++) {
      visit.push(new Array(board[k].length).fill(false));
  }

  var checkAdjacent = (i, j, board) => {
      let adjpoints = [];
      if (i - 1 >= 0) { adjpoints.push([i - 1, j]); }
      if (i + 1 < board.length) { adjpoints.push([i + 1, j]); }
      if (j - 1 >= 0) { adjpoints.push([i, j - 1]); }
      if (j + 1 < board[0].length) { adjpoints.push([i, j + 1]); }

       return adjpoints;
  }
  var n = 0;
  const helper = (n, row, col) => {
      if (n === word.length) {
          result = true;
          return;
      }
      if (n === 0) {
          for (let i = 0; i < board.length; i ++) {
              for (let j = 0; j < board[i].length; j ++) {
                  if (board[i][j] === word[n] && !visit[i][j]) {
                      visit[i][j] = true;
                      n ++;
                      helper(n, i, j);
                      visit[i][j] = false;
                      n --;
                  }
              }
          }
      }
      if (n > 0) {
          checkAdjacent(row, col, board).forEach((el) => {
              if (board[el[0]][el[1]] === word[n] && !visit[el[0]][el[1]]) {
                  visit[el[0]][el[1]]= true;
                  n++;
                  helper(n, el[0], el[1]);
                  visit[el[0]][el[1]]= false;
                  n--;
              }
          })
      }
  }
  helper(0);
  return result;
};

// IMPROVE THE SPACE COMPLEXITY BY not creating a record matrix
var exist = function(board, word) {
   // store visited record in the original cell
    var result = false;
    var findOne = (i, row, col) => {
        if (i === word.length) {
            result = true;
            return;
        }
        if (i === 0) {
            for (let row = 0; row < board.length; row ++) {
                for (let col = 0; col < board[0].length; col ++) {
                    if (board[row][col] === word[i]) {
                        let temp = board[row][col];
                        board[row][col] = 0;
                        i ++;
                        findOne(i, row, col);
                        i --;
                        board[row][col] = temp;
                    }
                }
            }
        }
        if (i > 0) {
            let neighbors = findAdjacent(row, col, board);
            for (let neighbor of neighbors) {
                if (board[neighbor[0]][neighbor[1]] && board[neighbor[0]][neighbor[1]] === word[i]) {
                    let temp = board[neighbor[0]][neighbor[1]];
                    board[neighbor[0]][neighbor[1]] = 0;
                    i ++;
                    findOne(i, neighbor[0], neighbor[1]);
                    i --;
                    board[neighbor[0]][neighbor[1]] = temp
                }
            }
        }
    }
    findOne(0);
    return result;
};

var findAdjacent = (row, col, board) => {
    let maxR = board.length - 1;
    let maxC = board[0].length - 1;
    var neighbors = [];
    if (row - 1 >= 0) { neighbors.push([row - 1, col]); }
    if (col - 1 >= 0) { neighbors.push([row, col - 1]); }
    if (row + 1 <= maxR) { neighbors.push([row + 1, col]); }
    if (col + 1 <= maxC) { neighbors.push([row, col + 1]); }
    return neighbors;
}
