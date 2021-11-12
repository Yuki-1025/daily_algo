// Assume the following rules are for the tic-tac-toe game on an n x n board between two
// players:

// A move is guaranteed to be valid and is placed on an empty block.
// Once a winning condition is reached, no more moves are allowed.
// A player who succeeds in placing n of their marks in a horizontal, vertical, or
//diagonal row wins the game.
// Implement the TicTacToe class:

// TicTacToe(int n) Initializes the object the size of the board n.
// int move(int row, int col, int player) Indicates that the player with id player plays
// at the cell (row, col) of the board. The move is guaranteed to be a valid move.

// input: ["TicTacToe","move","move","move"]
// output : [[2],[0,0,2],[1,1,1],[0,1,2]]

// O(n)
var TicTacToe = function(n) {
  this.win = n;
  // to store moves
  this.rows = Array(n).fill(0);
  this.cols = Array(n).fill(0);
  this.diag1 = 0;
  this.diag2 = 0;
};

TicTacToe.prototype.move = function(row, col, player) {
  let move;
  if (player === 1) {
      move = 1;
  } else {
      move = -1;
  }
  this.rows[row] += move;
  this.cols[col] += move;
  if (row === col ) this.diag1 += move;
  if (row + col === this.win - 1) this.diag2 += move;
  // check win
  for (let i = 0; i < this.win; i++) {
      if (this.rows[i] === this.win  || this.cols[i] === this.win) return 1;
      if (this.rows[i] === -this.win || this.cols[i] === -this.win) return 2;
  }
  if (this.diag1 === this.win || this.diag2 === this.win) return 1;
  if (this.diag1 === -this.win || this.diag2 === -this.win) return 2;
  return 0;
};