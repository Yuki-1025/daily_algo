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
  for (let k = 0; k < board.length; k ++) {
      visit.push(new Array(board[k].length).fill(false));
  }

  var checkLetter = (letter, board) => {
      for (let row = 0; row < board.length; row ++) {
          for (let col = 0; col < board[row].length; col ++) {
              if (board[row][col] === letter && !visit[row][col]) {
                  visit[row][col] = true;
                  return true;
              }
              //return false;
          }
      }
      return false;
  }
  for (let n = 0; n < word.length; n ++) {
      if(!checkLetter(word[n], board)) {
          return false;
      }
  }
  return true;
};