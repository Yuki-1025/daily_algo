// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

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

// var exist = function(board, word) {
//   // create a matrix for recording [visited or not]
//   var visit = [];
//   for (let k = 0; k < board.length; k ++) {
//       visit.push(new Array(board[k].length).fill(false));
//   }

//   var checkLetter = (letter, board) => {
//       for (let row = 0; row < board.length; row ++) {
//           for (let col = 0; col < board[row].length; col ++) {
//               if (board[row][col] === letter && !visit[row][col]) {
//                   visit[row][col] = true;
//                   return true;
//               }
//               //return false;
//           }
//       }
//       return false;
//   }
//   for (let n = 0; n < word.length; n ++) {
//       if(!checkLetter(word[n], board)) {
//           return false;
//       }
//   }
//   return true;
// };